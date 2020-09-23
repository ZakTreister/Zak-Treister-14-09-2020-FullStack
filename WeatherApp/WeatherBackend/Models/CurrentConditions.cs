using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WeatherBackend.Models
{
    public class CurrentConditions
    {
        public string WeatherText { get; set; }
        public Temperature Temperature { get; set; }
    }

    public class Temperature
    {
        public TemperatureValue Metric { get; set; }
    }

    public class TemperatureValue
    {
        public decimal Value { get; set; }
    }
}
