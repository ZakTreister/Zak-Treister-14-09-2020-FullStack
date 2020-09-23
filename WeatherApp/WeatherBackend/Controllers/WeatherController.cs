using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WeatherBackend.Data;
using WeatherBackend.Models;

namespace WeatherBackend.Controllers
{
    [Route("api")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private readonly IWeatherRepo _repository;

        public WeatherController(IWeatherRepo repository)
        {
            _repository = repository;
        }

        [Route("Search")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Location>>> Search([FromQuery] string query)
        {
            var locations = await _repository.Search(query);
            //var locations = new List<Location>()
            //{
            //    new Location()
            //    {
            //        Key= "213225",
            //        LocalizedName = "Jerusalem"
            //    },
            //     new Location()
            //    {
            //        Key= "306735",
            //        LocalizedName = "Jerez de la Frontera"
            //    },
            //};
            return Ok(locations);
        }


        [Route("GetCurrentWeather")]
        [HttpGet]
        public async Task<ActionResult<CurrentWeatherReadDto>> GetCurrentWeather([FromQuery] string cityKey)
        {
            var currentWeather = await _repository.GetCurrentWeather(cityKey);
            return Ok(currentWeather);
        }

        [Route("Favorites")]
        [HttpGet]
        public ActionResult<IEnumerable<Location>> GetFavorites()
        {
            return Ok(_repository.Favorites());
        }

        [Route("AddToFavorites")]
        [HttpPost]
        public ActionResult<FavoriteLocation> AddToFavorites([FromBody] Location location)
        {
            return _repository.AddToFavorites(location);
        }

        [Route("DeleteFavorite")]
        [HttpDelete]
        public IActionResult DeleteFavorite([FromQuery] int id)
        {
            if (_repository.DeleteFavorite(id))
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
