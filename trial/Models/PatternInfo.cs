using System;
using Microsoft.Extensions.Hosting;
using System.Net.Sockets;
using System.Xml.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace trial.Models
{
    public class PatternInfo
    {

        public string? Pattern { get; set; }

        public string? Image { get; set; }

        public float? Price { get; set; }
        public string? COUNT { get; set; }

    }


    public class PatternInfoContext : DbContext
    {
        public DbSet<PatternInfo> PatternInfo { get; set; }

        public PatternInfoContext(DbContextOptions options) : base(options)
        {

        }
    }

}