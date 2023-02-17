using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Assignment7.Models
{
    public class UserData
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = null!;

        [BsonElement("name")]
        public string Name { get; set; } = null!;

        [BsonElement("country")]
        public string Country { get; set; } = null!;

        [BsonElement("annualincome")]
        public double AnnualIncome { get; set; }

        [BsonElement("email")]
        public List<string> EmailIdsList { get; set; } = null!;
    }
}
