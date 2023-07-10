using System;
using Microsoft.Extensions.Hosting;
using System.Net.Sockets;
using System.Xml.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace trial.Models
{
    public class CustomerMeasurementInfo
    {
        public string? CustomerID { get; set; }
        public string? Pattern { get; set; }
        public string? MeasurementType { get; set; }
        public float? Measurement { get; set; }
        public string? Metric { get; set; }
    }


    public class CustomerMeasurementInfoContext : DbContext
    {
        public DbSet<CustomerMeasurementInfo> CustomerMeasurementInfo { get; set; }

        public CustomerMeasurementInfoContext(DbContextOptions options) : base(options)
        {

        }
    }

}