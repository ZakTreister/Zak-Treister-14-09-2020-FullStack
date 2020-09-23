using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeatherBackend.Models;

namespace WeatherBackend.Data
{
    public interface IWeatherRepo
    {
        IEnumerable<Location> Favorites();
        FavoriteLocation AddToFavorites(Location location);
        bool DeleteFavorite(int id);
        Task<IEnumerable<Location>> Search(string query);
        Task<CurrentWeatherReadDto> GetCurrentWeather(string cityKey);
    }
}
