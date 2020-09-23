using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using WeatherBackend.Models;

namespace WeatherBackend.Data
{
    public class WeatherRepo : IWeatherRepo

    {
        private readonly string _apiKey = "QfoXRpHwmNpGk6RCx6atVrViKsL9XuVc";

        private IHttpClientFactory _clientFactory;
        private readonly WeatherContext _dbContext;

        public WeatherRepo(IHttpClientFactory clientFactory,
            WeatherContext dbContext)
        {
            _clientFactory = clientFactory;
            _dbContext = dbContext;
        }

        public FavoriteLocation AddToFavorites(Location location)
        {
            if (location != null)
            {
                var locationModel = new FavoriteLocation()
                {
                    Key = location.Key,
                    LocalizedName = location.LocalizedName
                };
                _dbContext.FavoriteLocations.Add(locationModel);
                if (_dbContext.SaveChanges() > 0)
                {
                    return locationModel;
                }
            }
            return null;
        }

        public bool DeleteFavorite(int id)
        {
            var location = _dbContext.FavoriteLocations.Find(id);
            if (location != null)
            {
                _dbContext.FavoriteLocations.Remove(location);
                if (_dbContext.SaveChanges() > 0)
                {
                    return true;
                }
            }
            return false;
        }

        public IEnumerable<Location> Favorites()
        {
            var locations = _dbContext.FavoriteLocations.ToList();
            return locations;
        }

        public async Task<CurrentWeatherReadDto> GetCurrentWeather(string cityKey)
        {
            var currentWeather = _dbContext.CurrentWeathers.FirstOrDefault(x => x.Key == cityKey);

            if (currentWeather != null)
            {
                var favoriteLocation = _dbContext.FavoriteLocations.FirstOrDefault(x => x.Key == cityKey);
                return new CurrentWeatherReadDto()
                {
                    Id = currentWeather.Id,
                    Key = currentWeather.Key,
                    Temprature = currentWeather.Temprature,
                    WeatherText = currentWeather.WeatherText,
                    IsFavorite = favoriteLocation != null,
                    FavoriteId = favoriteLocation?.Id ?? 0
                };
            }

            var requestUri = "http://dataservice.accuweather.com/currentconditions/v1/" + cityKey + "?apikey=" + _apiKey;
            var request = new HttpRequestMessage(HttpMethod.Get, requestUri);
            var client = _clientFactory.CreateClient();

            try
            {
                HttpResponseMessage response = await client.SendAsync(request);

                if (response.IsSuccessStatusCode)
                {
                    CurrentConditions conditions = (await response.Content.ReadAsAsync<List<CurrentConditions>>()).FirstOrDefault();
                    var weather = new CurrentWeather()
                    {
                        WeatherText = conditions.WeatherText,
                        Temprature = conditions.Temperature.Metric.Value,
                        Key = cityKey
                    };
                    _dbContext.CurrentWeathers.Add(weather);
                    _dbContext.SaveChanges();
                    return new CurrentWeatherReadDto()
                    {
                        Id = weather.Id,
                        Key = weather.Key,
                        Temprature = weather.Temprature,
                        WeatherText = weather.WeatherText
                    }; ;
                }
            }
            catch (Exception e)
            {

            };
            return null;
        }

        public async Task<IEnumerable<Location>> Search(string query)
        {
            var requestUri = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + _apiKey + "&q=" + query;
            var request = new HttpRequestMessage(HttpMethod.Get, requestUri);
            var client = _clientFactory.CreateClient();

            try
            {
                HttpResponseMessage response = await client.SendAsync(request);

                if (response.IsSuccessStatusCode)
                {
                    return await response.Content.ReadAsAsync<List<Location>>();
                }
            }
            catch
            {

            };
            return new List<Location> { };
        }
    }
}
