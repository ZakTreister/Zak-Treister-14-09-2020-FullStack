using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeatherBackend.Models;

namespace WeatherBackend.Data
{
    public class WeatherContext : DbContext
    {
        public WeatherContext(DbContextOptions<WeatherContext> options) : base(options)
        {

        }

        public DbSet<CurrentWeather> CurrentWeathers { get; set; }
        public DbSet<FavoriteLocation> FavoriteLocations { get; set; }
    }
}
