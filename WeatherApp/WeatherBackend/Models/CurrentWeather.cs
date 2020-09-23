using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherBackend.Models
{
    public class CurrentWeather
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Key { get; set; }
        public decimal Temprature { get; set; }
        public string WeatherText { get; set; }
    }

    public class CurrentWeatherReadDto
    {
        public int Id { get; set; }
        public int FavoriteId { get; set; }
        public string Key { get; set; }
        public bool IsFavorite { get; set; }
        public decimal Temprature { get; set; }
        public string WeatherText { get; set; }
    }

   
    
}
