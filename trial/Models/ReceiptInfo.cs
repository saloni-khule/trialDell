using System;
using Microsoft.Extensions.Hosting;
using System.Net.Sockets;
using System.Xml.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace trial.Models
{
    public class ReceiptInfo
    {
        
        public string? ReceiptNum { get; set; }
        public float? OrderNum { get; set; }
        public string? CustomerID { get; set; }
        public string? CustomerName { get; set; }
        public float? AmountPaid{ get; set; }
        public string? DatePaid { get; set; }


    
        //public string? Address { get; set; }
    }


    public class ReceiptInfoContext : DbContext
    {
        public DbSet<ReceiptInfo> Receipt { get; set; }

        public ReceiptInfoContext(DbContextOptions options) : base(options)
        {

        }
    }

}