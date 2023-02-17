using Assignment7.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Assignment7.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserCrudController : ControllerBase
    {
        private readonly UserService _userService;

        public UserCrudController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var userList = await _userService.GetAllAsync();
            if (userList == null)
            {
                return NotFound();
            }
            return Ok(userList);
        }
        [HttpPost]
        public async Task<IActionResult> Post(UserData userData)
        {
            await _userService.AddNewUserAsync(userData);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Put(UserData updateData)
        {
            var user = await _userService.GetByIdAsync(updateData.Id);
            if (user == null)
            {
                return NotFound();
            }
            await _userService.UpdateUserAsync(updateData);
            return Ok();

        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _userService.GetByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            await _userService.DeleteUserAsync(id);
            return Ok();
        }
    }
}
