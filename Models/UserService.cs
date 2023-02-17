using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Assignment7.Models
{
    public class UserService
    {
        private readonly IMongoCollection<UserData> table;

        public UserService(IOptions<UsersDatabaseSetting> options)
        {
            var client = new MongoClient(options.Value.ConnectionString);
            var database = client.GetDatabase(options.Value.DatabaseName);
            table = database.GetCollection<UserData>(options.Value.UsersCollectionName);
        }

        public async Task<List<UserData>> GetAllAsync()
        {
            return await table.Find(_ => true).ToListAsync();
        }

        public async Task<UserData> GetByIdAsync(string id)
        {
            return await table.Find(_ => _.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddNewUserAsync(UserData newUser)
        {
            await table.InsertOneAsync(newUser);
        }

        public async Task UpdateUserAsync(UserData userData)
        {
            await table.ReplaceOneAsync(x => x.Id == userData.Id, userData);
        }
        public async Task DeleteUserAsync(string id)
        {
            await table.DeleteOneAsync(x => x.Id == id);
        }
    }
}
