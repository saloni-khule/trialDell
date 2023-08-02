using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using trial.Models;
using MySql;

using Microsoft.EntityFrameworkCore;
using System.Net.NetworkInformation;
using System.Text.Json;

namespace trial.Controllers;
using trial.Models;
using Microsoft.EntityFrameworkCore;
//using System.Data.Entity;
using System.Net.Http;
using System.Text.Json;
using Org.BouncyCastle.Ocsp;
using System;
//using static System.Runtime.InteropServices.JavaScript.JSType;
using static System.Runtime.InteropServices.GuidAttribute;
using Microsoft.AspNetCore.Http;
//using System.Web.UI;
//using System.Web.Mvc.Extensions;
using Org.BouncyCastle.Asn1.X509;
using Microsoft.Extensions.FileSystemGlobbing.Internal;
using System.Text.RegularExpressions;
using static Google.Protobuf.Reflection.SourceCodeInfo.Types;




//[Route("api/[controller]")]
//[ApiController]
public class HomeController : Controller
{

    private readonly ILogger<HomeController> _logger;
    private object JsonRequestBehavior;

    public HomeController(ILogger<HomeController> logger)
    {
        MySql.Data.MySqlClient.MySqlConnection conn;
        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            //Console.log(conn.)
            conn.Open();






            //string sqlstring = "server=; port= ; user id =;Password=;Database=;";


            //conn = new MySql.Data.MySqlClient.MySqlConnection();

            //MySqlConnection conn = new MySqlConnection(sqlstring);

            //        string Query = "SELECT * FROM sal.sheet1 where `Name` ='Robert Patel'";
            //        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
            //        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
            //        List<EmployeeInfo> EmployeeList = new List<EmployeeInfo>();


            //        if (MSQLRD.HasRows)
            //        {


            //        while (MSQLRD.Read())
            //            {

            //            EmployeeInfo BV = new EmployeeInfo();
            //                BV.EmployeeID = (MSQLRD["EmployeeID"].ToString());
            //                BV.Name = (MSQLRD["Name"].ToString());
            //                BV.Data = (MSQLRD["Data"].ToString());
            //                EmployeeList.Add(BV);

            //        }

            //        Console.WriteLine(EmployeeList.Last().Name);

            //    }




            //        conn.Close();
            //       // return EmployeeList;


        }

        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            Console.WriteLine(ex.Message);
            //MessageBox.Show(ex.Message);
            //conn.Database.


        }



        //  IActionResult Index()
        // {
        //     var listofData = _logger.Employees.ToList();
        //     return View(listofData);
        // }
        // [HttpGet]
        // ActionResult Create()
        // {
        //     return View();
        // }

        // [HttpPost]
        //IActionResult Create(EmployeeInfo employeeInfo)
        // {
        //     _logger.Employees.Add(employeeInfo);
        //     _logger.SaveChanges();
        //     ViewBag.Message = "Data Insert Successfully";
        //     return View();
        // }










        _logger = logger;
    }




    //[HttpGet]
    //[Route("api/EmployeeInfo/{EmployeeId}")]
    //public async Task<ActionResult<EmployeeInfo>> GetEmployeeById(int EmployeeID)
    //{
    //    var user = await _logger.
    //        //FirstOrDefaultAsync(
    //        //Models.EmployeeID.FindAsync(EmployeeID);
    //    return Ok(user);
    //}


    public IActionResult Index()
    {

        //Console.WriteLine("Test");
        ////string sqlstring = "server=; port= ; user id =;Password=;Database=;";
        //MySql.Data.MySqlClient.MySqlConnection conn;
        //string myConnectionString;

        //myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        //"database=sal";

        ////conn = new MySql.Data.MySqlClient.MySqlConnection();

        ////MySqlConnection conn = new MySqlConnection(sqlstring);
        //try
        //{
        //    conn = new MySql.Data.MySqlClient.MySqlConnection();
        //    conn.ConnectionString = myConnectionString;
        //    conn.Open();


        //}
        //catch (MySql.Data.MySqlClient.MySqlException ex)
        //{
        //    throw ex;
        //}
        //string Query = "SELECT * FROM sal.sheet1 where `Name` ='Robert Patel'";
        //MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        //MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        //List<EmployeeInfo> EmployeeList = new List<EmployeeInfo>();

        //if (MSQLRD.HasRows)
        //{

        //    while (MSQLRD.Read())
        //    {
        //        EmployeeInfo BV = new EmployeeInfo();
        //        BV.EmployeeID = (MSQLRD["EmployeeID"].ToString());
        //        BV.Name = (MSQLRD["Name"].ToString());
        //        BV.Data = (MSQLRD["Data"].ToString());
        //        EmployeeList.Add(BV);
        //    }
        //}
        //conn.Close();
        //var jsonString = JsonSerializer.Serialize(EmployeeList);
        //Console.WriteLine(jsonString);
        //  return RedirectToAction("Home");
        return View();



    }



    public string Get()
    {
        //Console.WriteLine("Test");
        //string sqlstring = "server=; port= ; user id =;Password=;Database=;";
        MySql.Data.MySqlClient.MySqlConnection conn;
        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        //conn = new MySql.Data.MySqlClient.MySqlConnection();

        //MySqlConnection conn = new MySqlConnection(sqlstring);
        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }
        //where `Name` ='Robert Patel'



        string Query = "SELECT * FROM sal.sheet1 ";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<EmployeeInfo> EmployeeList = new List<EmployeeInfo>();

        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                EmployeeInfo BV = new EmployeeInfo();
                BV.EmployeeID = (MSQLRD["EmployeeID"].ToString());
                BV.Name = (MSQLRD["Name"].ToString());
                BV.Data = (MSQLRD["Data"].ToString());
                EmployeeList.Add(BV);
            }
        }
        conn.Close();

        var jsonResult = JsonSerializer.Serialize(EmployeeList);
        //(EmployeeList);
        // var jsonR = JsonSerializer.Deserialize < JsonResult > jsonResult;
        //  (jsonResult);
        //Console.WriteLine(jsonResult);

        //var result = new JsonResult
        //{
        //    Data = JsonConvert.DeserializeObject(jsonResult);
        //};
        //jsonResult(EmployeeList);
        // return Json(jsonResult);

        return jsonResult;

    }



    //PUT REQUEST

    public int Put(string EmployeeID, string Name, string Data)
    {

        //string sqlstring = "server=; port= ; user id =;Password=;Database=;";
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        //conn = new MySql.Data.MySqlClient.MySqlConnection();

        //MySqlConnection conn = new MySqlConnection(sqlstring);
        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }
        //string Query = "INSERT into sal.sheet1 VALUES( @param1,`333`,`4444`) ";
        //MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        //MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();

        //conn.Close();

        //string Query = $"INSERT into sal.sheet1 VALUES({ EmployeeID},{Name},{Data}) ";
        Console.WriteLine(Name);
        Console.WriteLine("Test");
        //try {
        //    string Query = "INSERT into sal.sheet1 VALUES(@EmployeeID, @Name, @Data)";

        //    MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

        //    cmd.Parameters.AddWithValue("@EmployeeID", EmployeeID);

        //    cmd.Parameters.AddWithValue("@Name", Name);
        //    cmd.Parameters.AddWithValue("@Data", Data);

        //    int rowsAffected = cmd.ExecuteNonQuery();

        //}
        //catch(MySql.Data.MySqlClient.MySqlException ex) {
        //    Console.WriteLine("entered");
        //    btnShowAlert_Click();
        //    throw;

        //}




        //string Query1 = "SELECT * FROM sal.sheet1 where EmployeeID=@EmployeeID";
        //MySql.Data.MySqlClient.MySqlCommand cmd1 = new MySql.Data.MySqlClient.MySqlCommand(Query1, conn);
        //MySql.Data.MySqlClient.MySqlDataReader MSQLRD2 = cmd1.ExecuteReader();
        //Console.WriteLine("cmd1");

        //Console.WriteLine(cmd1);
        //Console.WriteLine("cmd1");
        //if (MSQLRD2.HasRows)
        //{
        //    Console.WriteLine('j');
        //}



        try
        {
            string Query = "INSERT into sal.sheet1 VALUES(@EmployeeID, @Name, @Data)";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@EmployeeID", EmployeeID);

            cmd.Parameters.AddWithValue("@Name", Name);
            cmd.Parameters.AddWithValue("@Data", Data);
            if (EmployeeID == null)
            {
                Console.WriteLine('1');
                return 1;
            }
            else
            {
                cmd.ExecuteNonQuery();
                return 0;
            }


        }
        catch
        {
            return 3;
        }

        //pikashow


        //catch (MySql.Data.MySqlClient.MySqlException ex)
        //{
        //    Console.WriteLine("entered");
        //    btnShowAlert_Click();
        //    //throw;

        //}























        //string Query = "IF NOT EXISTS (SELECT * FROM sal.sheet1 WHERE EmployeeID=@EmployeeID) INSERT into sal.sheet1 VALUES(@EmployeeID, @Name, @Data)";
        //MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        //cmd.Parameters.AddWithValue("@EmployeeID", EmployeeID);
        //cmd.Parameters.AddWithValue("@Name", Name);
        //cmd.Parameters.AddWithValue("@Data", Data);
        //Console.WriteLine(EmployeeID);
        Console.WriteLine(Name);
        Console.WriteLine(Data);
        //  cmd.ExecuteNonQuery();
        // return "";
    }




    public void UpdateEmployeeData(string EmployeeID, string Name, string Data)
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        //conn = new MySql.Data.MySqlClient.MySqlConnection();

        //MySqlConnection conn = new MySqlConnection(sqlstring);
        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {
            Console.WriteLine("up");
            //string Query = "INSERT into sal.sheet1 VALUES(@EmployeeID, @Name, @Data)";
            string Query = "UPDATE sal.sheet1 SET Name = @Name, Data = @Data WHERE EmployeeID = @EmployeeID";
            Console.WriteLine("up");
            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@EmployeeID", EmployeeID);

            cmd.Parameters.AddWithValue("@Name", Name);
            cmd.Parameters.AddWithValue("@Data", Data);
            cmd.ExecuteNonQuery();


        }
        catch
        {
            throw;
        }

    }


    protected void btnShowAlert_Click()
    {
        Response.WriteAsync("<script>alert(\"an error occur\")</script>");
        //System.Web.Mvc.Extensions.scrip
        //ScriptManager.RegisterStartupScript(this, GetType(), "AnyValue", "showAlert();", true);
    }

    /////DELETE Request


    public int delete(string EmployeeID)

    {
        Console.WriteLine("1st");
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";
        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();
            Console.WriteLine("2nd");


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            Console.WriteLine("3rd");
            throw ex;
        }


        string Query = "Delete from sheet1 where EmployeeID=@EmployeeID";

        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

        cmd.Parameters.AddWithValue("@EmployeeID", EmployeeID);

        if (EmployeeID == null)
        {
            return 1;

        }


        else
        {
            var rowsAffected = cmd.ExecuteNonQuery();
            //Response.Redirect("127.0.0.1:3306");

            if (rowsAffected == 0)
            {
                return 2;
            }
            return 3;

        }






    }

    //System.Web.ExtensionsSystem.Web.Extensions








    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult AddPayment()
    {
        return View();
    }

    public IActionResult AddNewCustomer()
    {
        return View();
    }

    public IActionResult Modal()
    {
        return View();
    }

    //[ChildActionOnly]
    public ActionResult GetModalAction()
    {
        return PartialView("Modal");
    }




    public IActionResult AddData()
    {
        return View();
    }
    public IActionResult DeleteData()
    {
        return View();
    }
    public IActionResult ViewTable()
    {
        return View();
    }

    public IActionResult DisplayForm()
    {

        return View();
    }

    public IActionResult EditTable()
    {
        return View();
    }

    public IActionResult OrderDataEntry()
    {
        return View();
    }

    public IActionResult NewCustomerID()
    {
        return View();
    }


    public IActionResult NewCustomerDataEntry()
    {
        return View();
    }
    public IActionResult Orders()
    {
        return View();
    }



    public IActionResult ViewOrders()
    {
        return View();
    }
    public IActionResult ClosedOrders()
    {
        return View();
    }

    public IActionResult EditClosedOrders()
    {
        return View();
    }

    public IActionResult EditOrders()
    {
        return View();
    }

    public IActionResult EditCustomer()
    {
        return View();
    }

    public IActionResult CreateOrder()
    {
        return View();
    }
    public IActionResult Payment()
    {
        return View();
    }

    public IActionResult Dashboard()
    {
        return View();
    }



    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }


    public IActionResult popupForm()
    {
        return View();
    }


    public IActionResult Patterns()
    {
        return View();
    }

    public IActionResult MeasurementType()
    {
        return View();
    }

    public IActionResult Customers()
    {
        return View();
    }


    public IActionResult CustomerMeasurementDetails()
    {
        return View();
    }




    //[HttpGet]
    //public IActionResult GetAllEmployeeNames()
    //{
    //    try
    //    {

    //        var owners = _logger.
    //            //_repository.Owner.GetAllO();
    //        _logger.LogInfo($"Returned all owners from database.");
    //        return Ok(owners);
    //    }
    //    catch (Exception ex)
    //    {
    //        _logger.LogError($"Something went wrong inside GetAllOwners action: {ex.Message}");
    //        return StatusCode(500, "Internal server error");
    //    }
    //}




    //[HttpGet]
    //public ActionResult Get()

    //{

    //    Console.WriteLine("Test");
    //    //string sqlstring = "server=; port= ; user id =;Password=;Database=;";
    //    MySql.Data.MySqlClient.MySqlConnection conn;
    //    string myConnectionString;

    //    myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
    //    "database=sal";

    //    //conn = new MySql.Data.MySqlClient.MySqlConnection();

    //    //MySqlConnection conn = new MySqlConnection(sqlstring);
    //    try
    //    {
    //        conn = new MySql.Data.MySqlClient.MySqlConnection();
    //        conn.ConnectionString = myConnectionString;
    //        conn.Open();


    //    }
    //    catch (MySql.Data.MySqlClient.MySqlException ex)
    //    {
    //        throw ex;
    //    }
    //    string Query = "SELECT * FROM sal.sheet1 where `Name` ='Robert Patel'";
    //    MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
    //    MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
    //    List<EmployeeInfo> EmployeeList = new List<EmployeeInfo>();

    //    if (MSQLRD.HasRows)
    //    {

    //        while (MSQLRD.Read())
    //        {
    //            EmployeeInfo BV = new EmployeeInfo();
    //            BV.EmployeeID = (MSQLRD["EmployeeID"].ToString());
    //            BV.Name = (MSQLRD["Name"].ToString());
    //            BV.Data = (MSQLRD["Data"].ToString());
    //            EmployeeList.Add(BV);
    //        }
    //    }
    //    conn.Close();
    //    var jsonString = JsonSerializer.Serialize(EmployeeList);
    //    Console.WriteLine(jsonString);
    //    return RedirectToAction("Home");
    //}




    //public int AddOrderData(string CustomerID, string OrderNumber, string Name, int Phone, string Address, string Email,
    //    string MeasurementID, string Pattern, string Measurement,Date DueDate,string FabricStatus, int Price, int Advance )
    //{

    //    //string sqlstring = "server=; port= ; user id =;Password=;Database=;";
    //    MySql.Data.MySqlClient.MySqlConnection conn;

    //    string myConnectionString;

    //    myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
    //    "database=sal";

    //    try
    //    {
    //        conn = new MySql.Data.MySqlClient.MySqlConnection();
    //        conn.ConnectionString = myConnectionString;
    //        conn.Open();


    //    }
    //    catch (MySql.Data.MySqlClient.MySqlException ex)
    //    {
    //        throw ex;
    //    }

    //    Console.WriteLine("Test");


    //    try
    //    {
    //        string Query = "INSERT into sal.Customer VALUES(@CustomerID, @orderNum, " +
    //            "@Name, @Phone, @Address, @Email,@MeasurementID, @Pattern, " +
    //            "@Measurement,@DueDate, @FabricStatus, @Price, @Advance)";

    //        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

    //        cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
    //        //cmd.Parameters.AddWithValue("@orderNum", OrderNumber);
    //        cmd.Parameters.AddWithValue("@Name", Name);
    //        cmd.Parameters.AddWithValue("@Phone", Phone);
    //        cmd.Parameters.AddWithValue("@Address", Address);
    //        cmd.Parameters.AddWithValue("@Email", Email);
    //        cmd.Parameters.AddWithValue("@MeasurementID", MeasurementID);


    //        if (EmployeeID == null)
    //        {
    //            Console.WriteLine('1');
    //            return 1;
    //        }
    //        else
    //        {
    //            cmd.ExecuteNonQuery();

    //            return 0;
    //        }


    //    }
    //    catch
    //    {
    //        return 3;
    //    }
    //}





    public int AddMeasurementID(string MeasurementID)
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {
            string Query = "INSERT into sal.Measurement VALUES(@MeasurementID)";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@MeasurementID", MeasurementID);
            cmd.ExecuteNonQuery();
            return 0;


        }
        catch
        {
            return 1;
        }


    }

    public int AddCustomerData(string CustomerID, string Name, int Phone, string Address, string Email,
        string MeasurementID)
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;8" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {
            string Query = "INSERT into sal.Customer VALUES(@CustomerID, @Name, @Phone, @Address, @Email,@MeasurementID)";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
            //cmd.Parameters.AddWithValue("@orderNum", OrderNumber);
            cmd.Parameters.AddWithValue("@Name", Name);
            cmd.Parameters.AddWithValue("@Phone", Phone);
            cmd.Parameters.AddWithValue("@Address", Address);
            cmd.Parameters.AddWithValue("@Email", Email);
            cmd.Parameters.AddWithValue("@MeasurementID", MeasurementID);
            cmd.ExecuteNonQuery();
            return 0;


        }
        catch
        {
            return 1;
        }

    }

    //public int AddOrderData()
    //{
    //    return 0;
    //}








    public int AddNewCustomerID(string CustomerID)
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        //conn = new MySql.Data.MySqlClient.MySqlConnection();

        //MySqlConnection conn = new MySqlConnection(sqlstring);
        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {
            string Query = "INSERT into sal.Customer VALUES(@CustomerID,null, null,null,null)";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@CustomerID", CustomerID);


            if (CustomerID == null)
            {
                Console.WriteLine('1');
                return 1;
            }
            else
            {
                cmd.ExecuteNonQuery();
                return 0;
            }


        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
            return 3;
        }


    }








    public int NewCustomerDataEntryCS(string CustomerID, string CustomerName, int Phone, string Email, string Address)
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }


        try
        {
            Console.WriteLine("hello");
            string Query = "UPDATE Customer SET CustomerName = @CustomerName, Phone = @Phone, Email = @Email, Address = @Address WHERE CustomerID = @CustomerID";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
            cmd.Parameters.AddWithValue("@CustomerName", CustomerName);
            cmd.Parameters.AddWithValue("@Phone", Phone);
            cmd.Parameters.AddWithValue("@Email", Email);
            cmd.Parameters.AddWithValue("@Address", Address);

            Console.WriteLine("hello");

            cmd.ExecuteNonQuery();
            Console.WriteLine("bye");
            return 0;



        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);

            return 3;
        }

    }


    public string ExistingEmployeeDataEntry(string CustomerID)
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();



        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }


        string Query = "SELECT * FROM sal.Customer WHERE CustomerID = @CustomerID ";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<CustomerInfo> CustomerInfoList = new List<CustomerInfo>();

        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                CustomerInfo BV = new CustomerInfo();
                BV.CustomerName = (MSQLRD["CustomerName"].ToString());
                BV.Phone = ((int?)MSQLRD["Phone"]);
                BV.Email = (MSQLRD["Email"].ToString());
                BV.Address = (MSQLRD["Address"].ToString());
                CustomerInfoList.Add(BV);
            }
        }
        conn.Close();

        var jsonResult = JsonSerializer.Serialize(CustomerInfoList);
        return jsonResult;
    }





    public string GetPattern()
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }



        string Query = "SELECT * FROM sal.Pattern ";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<PatternInfo> patternList = new List<PatternInfo>();

        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                PatternInfo BV = new PatternInfo();
                BV.Pattern = (MSQLRD["Pattern"].ToString());
                BV.Price = ((float?)MSQLRD["Price"]);
                patternList.Add(BV);
            }
        }


        conn.Close();

        var jsonResult = JsonSerializer.Serialize(patternList);


        return jsonResult;

    }


    public int CheckMeasurementField(string CustomerID, string MeasurementType)
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }



        string Query = "SELECT * FROM sal.CustomerMeasurementDetails Where CustomerID=@CustomerID and MeasurementType=@MeasurementType ";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
        cmd.Parameters.AddWithValue("@MeasurementType", MeasurementType);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<CustomerMeasurementInfo> CustomerMeasurementInfoList = new List<CustomerMeasurementInfo>();

        if (MSQLRD.HasRows)
        {

            //while (MSQLRD.Read())
            //{

            //    CustomerMeasurementInfoList.Add(MSQLRD["MeasurementType"].ToString());
            //}
            return 1;
        }

        conn.Close();
        return 0;



    }




    public string GetMeasurementType()
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }



        string Query = "SELECT * FROM sal.MeasurementType ";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<string> MeasurementType = new List<string>();

        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                MeasurementType.Add(MSQLRD["MeasurementType"].ToString());
            }
        }
        conn.Close();

        var jsonResult = JsonSerializer.Serialize(MeasurementType);


        return jsonResult;

    }



    public string GetCustomer()
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            Console.WriteLine(ex.Message);
            throw ex;
        }



        string Query = "SELECT * FROM sal.Customer";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<CustomerInfo> CustomerInfoList = new List<CustomerInfo>();

        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                CustomerInfo BV = new CustomerInfo();
                BV.CustomerID = (MSQLRD["CustomerID"].ToString());
                BV.CustomerName = (MSQLRD["CustomerName"].ToString());
                BV.Phone = ((int?)MSQLRD["Phone"]);
                BV.Email = (MSQLRD["Email"].ToString());
                BV.Address = (MSQLRD["Address"].ToString());
                CustomerInfoList.Add(BV);

            }
        }
        conn.Close();

        var jsonResult = JsonSerializer.Serialize(CustomerInfoList);


        return jsonResult;

    }







    public int CreateOrderFunc(string CustomerID, string Pattern, string DueDate, float Quantity, float Total, float Advance, float Due, float TaxPercent, float Tax)
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }


        try
        {
            int Quantity2 = (int)Quantity;
            int Total2 = (int)Total;
            int Advance2 = (int)Advance;
            int Due2 = (int)Due;

            Console.WriteLine("REACHED");
            string Query = "INSERT into sal.OrderData (CustomerID, Pattern, DueDate, Quantity, TaxPercent) VALUES(@CustomerID, @Pattern, @DueDate, @Quantity, @TaxPercent)";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
            cmd.Parameters.AddWithValue("@Pattern", Pattern);
            cmd.Parameters.AddWithValue("@DueDate", DueDate);
            cmd.Parameters.AddWithValue("@Quantity", Quantity2);
            cmd.Parameters.AddWithValue("@TaxPercent", TaxPercent);
            cmd.ExecuteNonQuery();

            string Query2 = "INSERT into sal.Payment (CustomerID, Total, Advance, Due, DueDate,Tax) VALUES(@CustomerID, @Total, @Advance, @Due, @DueDate,@Tax)";

            MySql.Data.MySqlClient.MySqlCommand cmd2 = new MySql.Data.MySqlClient.MySqlCommand(Query2, conn);

            cmd2.Parameters.AddWithValue("@CustomerID", CustomerID);
            cmd2.Parameters.AddWithValue("@Total", Total2);
            cmd2.Parameters.AddWithValue("@Advance", Advance2);
            cmd2.Parameters.AddWithValue("@Due", Due2);
            cmd2.Parameters.AddWithValue("@DueDate", DueDate);
            cmd2.Parameters.AddWithValue("@Tax", Tax);

            cmd2.ExecuteNonQuery();





            Console.WriteLine("DFNKENE");
            return 0;


        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return 3;
        }




    }














    public int AddPaymentFunc(string CustomerName,string CustomerID, int OrderNum, float AmountPaid)
    {
        Console.WriteLine("j");

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }


        try
        {
          /*  int Quantity2 = (int)Quantity;
            int Total2 = (int)Total;
            int Advance2 = (int)Advance;
            int Due2 = (int)Due;*/

            Console.WriteLine("REACHED");
            string Query = "INSERT into sal.receipt (CustomerName, CustomerID, OrderNum, AmountPaid) VALUES(@CustomerName, @CustomerID, @OrderNum, @AmountPaid)";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@CustomerName", CustomerName);
            cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
            cmd.Parameters.AddWithValue("@OrderNum", OrderNum);
            cmd.Parameters.AddWithValue("@AmountPaid", AmountPaid);
            cmd.ExecuteNonQuery();

            

            Console.WriteLine("DFNKENE");
            return 0;


        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
            return 3;
        }




    }














    public string getCustomerIDByName(string CustomerName)
    {


        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }



        string Query = "SELECT CustomerID FROM sal.Customer where CustomerName=@CustomerName";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        cmd.Parameters.AddWithValue("@CustomerName", CustomerName);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<CustomerInfo> CustomerInfoList = new List<CustomerInfo>();

        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                CustomerInfo BV = new CustomerInfo();

                BV.CustomerID = (MSQLRD["CustomerID"].ToString());

                CustomerInfoList.Add(BV);

            }
        }
        conn.Close();

        var jsonResult = JsonSerializer.Serialize(CustomerInfoList);


        return jsonResult;



    }




    public string getOrderNumberByID(string CustomerID)
    {


        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }



        string Query = "SELECT OrderNum FROM sal.OrderData where CustomerID=@CustomerID";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<OrderInfo> OrderInfoList = new List<OrderInfo>();

        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                OrderInfo BV = new OrderInfo();

                BV.OrderNum = ((int?)MSQLRD["OrderNum"]);

                OrderInfoList.Add(BV);

            }
        }
        conn.Close();

        var jsonResult = JsonSerializer.Serialize(OrderInfoList);
        Console.WriteLine(jsonResult);

        return jsonResult;



    }







    public string GetCustomerMeasurementDetails(string CustomerID)
    {


        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
            "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }



        string Query = "SELECT * FROM sal.CustomerMeasurementDetails WHERE CustomerID = @CustomerID ";

        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<CustomerMeasurementInfo> CustomerMeasurementInfoList = new List<CustomerMeasurementInfo>();

        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                CustomerMeasurementInfo BV = new CustomerMeasurementInfo();
                //BV.CustomerID = (MSQLRD["CustomerID"].ToString());
                BV.MeasurementType = (MSQLRD["MeasurementType"].ToString());
                BV.Measurement = ((float?)MSQLRD["Measurement"]);
                BV.Metric = (MSQLRD["Metric"].ToString());
                //BV.Email = (MSQLRD["Email"].ToString());
                //BV.Address = (MSQLRD["Address"].ToString());
                CustomerMeasurementInfoList.Add(BV);

            }
        }
        conn.Close();


        var jsonResult = JsonSerializer.Serialize(CustomerMeasurementInfoList);


        return jsonResult;



    }







    public int AddMeasurementType(string MeasurementType)
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {

            string Query = "INSERT into sal.MeasurementType VALUES(@MeasurementType)";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@MeasurementType", MeasurementType);
            cmd.ExecuteNonQuery();
            Console.WriteLine("DFNKENE");
            return 0;


        }
        catch
        {

            return 3;
        }


    }










    public int AddPattern(string Pattern, float Price)
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {

            string Query = "INSERT into sal.Pattern VALUES(@Pattern,@Price)";
            //Console.WriteLine('hel');

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@Pattern", Pattern);
            cmd.Parameters.AddWithValue("@Price", Price);
            cmd.ExecuteNonQuery();
            Console.WriteLine("DFNKENE");
            return 0;


        }
        catch
        {

            return 3;
        }


    }











    public JsonResult AddCustomer(string CustomerID, string CustomerName, int Phone, string Email, string Address)
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {

            string Query = "INSERT into sal.Customer VALUES(@CustomerID, @CustomerName, @Phone, @Email, @Address)";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
            cmd.Parameters.AddWithValue("@CustomerName", CustomerName);
            cmd.Parameters.AddWithValue("@Phone", Phone);
            cmd.Parameters.AddWithValue("@Email", Email);
            cmd.Parameters.AddWithValue("@Address", Address);

            cmd.ExecuteNonQuery();
            Console.WriteLine("DFNKENE");
            
            return Json("0");


        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);

            return Json("3");
        }


    }





    public int DeleteCustomer(string CustomerID)
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {

            string q = "Select * from sal.OrderData where CustomerID = @CustomerID";
            MySql.Data.MySqlClient.MySqlCommand cmd1 = new MySql.Data.MySqlClient.MySqlCommand(q, conn);
            cmd1.Parameters.AddWithValue("@CustomerID", CustomerID);
            MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd1.ExecuteReader();
           // Console.WriteLine(MSQLRD);
            if (MSQLRD.HasRows)
            {
                Console.WriteLine('1');
                return 1;
            }
            conn.Close();
            conn.Open();


            string Query = "Delete from sal.CustomerMeasurementDetails where CustomerID=@CustomerID;" +
                "Delete from sal.Customer where CustomerID= @CustomerID;";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
         
            cmd.ExecuteNonQuery();
            Console.WriteLine("DFNKENE");
            return 0;


        }
        catch (Exception exe)
        {

            Console.WriteLine(exe.Message);
            //throw exe;
            return 3;
        }
      //  return 3;

    }





    public int DeleteMeasurement(string MeasurementType)
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {

            string q = "Select * from sal.CustomerMeasurementDetails where MeasurementType = @MeasurementType";
            MySql.Data.MySqlClient.MySqlCommand cmd1 = new MySql.Data.MySqlClient.MySqlCommand(q, conn);
            cmd1.Parameters.AddWithValue("@MeasurementType", MeasurementType);
            MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd1.ExecuteReader();
            // Console.WriteLine(MSQLRD);
            if (MSQLRD.HasRows)
            {
                Console.WriteLine('1');
                return 1;
            }
            conn.Close();
            conn.Open();


            string Query = "Delete from sal.MeasurementType where MeasurementType=@MeasurementType;";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@MeasurementType", MeasurementType);

            cmd.ExecuteNonQuery();
            Console.WriteLine("DFNKENE");
            return 0;


        }
        catch (Exception exe)
        {

            Console.WriteLine(exe.Message);
            //throw exe;
            return 3;
        }
        //  return 3;

    }







    public int DeleteOrder(int orderNum)
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {

            string q = "Select * from sal.receipt where orderNum = @orderNum";
            MySql.Data.MySqlClient.MySqlCommand cmd1 = new MySql.Data.MySqlClient.MySqlCommand(q, conn);
            cmd1.Parameters.AddWithValue("@orderNum", orderNum);
            MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd1.ExecuteReader();
            // Console.WriteLine(MSQLRD);
            if (MSQLRD.HasRows)
            {
                Console.WriteLine('1');
                return 1;
            }
            conn.Close();
            conn.Open();


            string Query = "Delete from sal.orderData where orderNum=@orderNum;";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@orderNum", orderNum);

            cmd.ExecuteNonQuery();
            Console.WriteLine("DFNKENE");
            return 0;


        }
        catch (Exception exe)
        {

            Console.WriteLine(exe.Message);
            //throw exe;
            return 3;
        }
        //  return 3;

    }

















    public int UpdateCustomer(string CustomerID, string CustomerName, float Phone, string Email, string Address)
    {
        
        int Phone2 = (int)Phone;

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {

       

            string Query = "Update sal.Customer SET CustomerName=@CustomerName, Phone=@Phone, Email=@Email, Address=@Address WHERE CustomerID=@CustomerID";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
 
            cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
            cmd.Parameters.AddWithValue("@CustomerName", CustomerName);
            cmd.Parameters.AddWithValue("@Phone", Phone2);
            cmd.Parameters.AddWithValue("@Email", Email);
            cmd.Parameters.AddWithValue("@Address", Address);


            cmd.ExecuteNonQuery();
            Console.WriteLine("DFNKENE");
            return 0;


        }
        catch (Exception exe)
        {

            Console.WriteLine(exe.Message);
            //throw exe;
            return 3;
        }
        //  return 3;

    }




    




    public int AddMeasurementField(string CustomerID, string MeasurementType, float Measurement, string Metric)
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }
        try
        {

            string Query = "INSERT into sal.CustomerMeasurementDetails VALUES(@CustomerID,null,@MeasurementType, @Measurement, @Metric)";

            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
            cmd.Parameters.AddWithValue("@MeasurementType", MeasurementType);
            cmd.Parameters.AddWithValue("@Measurement", @Measurement);
            cmd.Parameters.AddWithValue("@Metric", Metric);

            cmd.ExecuteNonQuery();
            Console.WriteLine("DFNKENE");
            return 0;


        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);

            return 3;
        }



    }


    //update measurements of a specific customer

    public void UpdateCustomerMeasurements(string CustomerID, string MeasurementType, float Measurement, string Metric)
    {
        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        //conn = new MySql.Data.MySqlClient.MySqlConnection();

        //MySqlConnection conn = new MySqlConnection(sqlstring);
        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }

        try
        {
            Console.WriteLine("up");
            //string Query = "INSERT into sal.sheet1 VALUES(@EmployeeID, @Name, @Data)";
            string Query = "UPDATE sal.CustomerMeasurementDetails SET Measurement = @Measurement, Metric = @Metric WHERE CustomerID = @CustomerID and MeasurementType= @MeasurementType";
            Console.WriteLine("up");
            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@CustomerID", CustomerID);

            cmd.Parameters.AddWithValue("@MeasurementType", MeasurementType);
            cmd.Parameters.AddWithValue("@Measurement", Measurement);
            cmd.Parameters.AddWithValue("@Metric", Metric);

            cmd.ExecuteNonQuery();


        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);


        }
    }







    public string getPatternSalesGraph()
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }



        string Query = "SELECT Pattern, SUM(Quantity) FROM orderData GROUP BY  Pattern ";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<PatternInfo> patternList = new List<PatternInfo>();

        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                PatternInfo BV = new PatternInfo();
                BV.Pattern = (MSQLRD["Pattern"].ToString());
                //float x = (float)MSQLRD["COUNT(Pattern)"];
                //Console.WriteLine(MSQLRD["COUNT(Pattern)"].ToString());
                BV.COUNT = (MSQLRD["SUM(Quantity)"].ToString());
                patternList.Add(BV);
            }
        }


        conn.Close();

        var jsonResult = JsonSerializer.Serialize(patternList);


        return jsonResult;




    }




    //to get number of deliveries due today
    public string NumDeliveryDue()
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
            "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }
        string Query = "SELECT Count(orderNum) FROM orderData where DueDate = CURRENT_DATE; ";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<PatternInfo> patternList = new List<PatternInfo>();


        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                PatternInfo BV = new PatternInfo();
                BV.COUNT = (MSQLRD["Count(orderNum)"].ToString());

                patternList.Add(BV);
            }
        }


        conn.Close();

        var jsonResult = JsonSerializer.Serialize(patternList);

        Console.WriteLine(jsonResult);
        return jsonResult;




    }



    //to get total sales and total payment

    //to get number of deliveries due today
    public string TotalAmountPaid()
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
            "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }
        string Query = "SELECT Sum(AmountPaid) FROM sal.Receipt;";

        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<PatternInfo> patternList = new List<PatternInfo>();


        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                PatternInfo BV = new PatternInfo();
                BV.COUNT = (MSQLRD["Sum(AmountPaid)"].ToString());

                patternList.Add(BV);
            }
        }


        conn.Close();

        var jsonResult = JsonSerializer.Serialize(patternList);

        Console.WriteLine(jsonResult);
        return jsonResult;

    }





    public string NumPendingDeliveries()
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
            "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }
        string Query = "SELECT Count(orderNum) FROM sal.OrderData where OrderStatus!='Delivered'";

        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<PatternInfo> patternList = new List<PatternInfo>();


        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                PatternInfo BV = new PatternInfo();
                BV.COUNT = (MSQLRD["Count(orderNum)"].ToString());

                patternList.Add(BV);
            }
        }


        conn.Close();

        var jsonResult = JsonSerializer.Serialize(patternList);

        Console.WriteLine(jsonResult);
        return jsonResult;

    }









    public string TotalSales()
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
            "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }
        string Query = "SELECT Sum(Total) FROM sal.Payment;";

        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<PatternInfo> patternList = new List<PatternInfo>();


        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {
                PatternInfo BV = new PatternInfo();
                BV.COUNT = (MSQLRD["Sum(Total)"].ToString());

                patternList.Add(BV);
            }
        }


        conn.Close();
        var jsonResult = JsonSerializer.Serialize(patternList);
        Console.WriteLine(jsonResult);
        return jsonResult;

    }










    public string GetOrders()
    {


        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
            "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }
        Console.WriteLine("nfenfkenfkenfkenfkernfkre");

        string Query = "select * from sal.orderData join sal.Payment using (orderNum, CustomerID, DueDate) join sal.Customer using (CustomerID); ";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<OrderInfo> OrderList = new List<OrderInfo>();



        //string Query2 = " Select Due from sal.Payment";
        //MySql.Data.MySqlClient.MySqlCommand cmd2 = new MySql.Data.MySqlClient.MySqlCommand(Query2, conn);
        //MySql.Data.MySqlClient.MySqlDataReader MSQLRD2 = cmd2.ExecuteReader();


        Console.WriteLine("nfenfkenfkenfkenfkernfkre");
        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {

                OrderInfo BV = new OrderInfo();
                BV.OrderNum = ((int?)MSQLRD["orderNum"]);
                BV.CustomerID = (MSQLRD["CustomerID"].ToString());
                BV.CustomerName = (MSQLRD["CustomerName"].ToString());
                BV.AmountDue = ((float?)MSQLRD["Due"]);
                BV.DueDate = (MSQLRD["DueDate"].ToString());


                BV.Pattern = (MSQLRD["Pattern"].ToString());
                BV.Quantity = ((int?)MSQLRD["Quantity"]);
                BV.Total = ((float?)MSQLRD["Total"]);
                BV.Advance = ((float?)MSQLRD["Advance"]);
                BV.Phone = ((int?)MSQLRD["Phone"]);
                BV.Email = (MSQLRD["Email"].ToString());
                BV.Address = (MSQLRD["Address"].ToString());
                BV.OrderStatus = (MSQLRD["OrderStatus"].ToString());
                OrderList.Add(BV);
            }
        }


        conn.Close();

        var jsonResult = JsonSerializer.Serialize(OrderList);

        Console.WriteLine(jsonResult);
        return jsonResult;

    }





    public string GetClosedOrders()
    {


        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
            "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }
        Console.WriteLine("nfenfkenfkenfkenfkernfkre");

        string Query = "SELECT  orderNum,Total,DueDate, Sum(DeliveryStatus),Sum(AmountPaid) from sal.receipt  join " +
            "sal.payment using (orderNum) GROUP BY orderNum having (Total > Sum(AmountPaid) and Sum(DeliveryStatus)=0 and  DueDate < CURRENT_DATE) " +
            "or (Total <= Sum(AmountPaid) and Sum(DeliveryStatus)=0 and  DueDate < CURRENT_DATE) or  (Total<=Sum(AmountPaid) and Sum(DeliveryStatus)=0 and DueDate >= CURRENT_DATE)" +
            " or (Sum(DeliveryStatus)>0 and DueDate< CURRENT_DATE and Total > Sum(AmountPaid)) or (Sum(DeliveryStatus)>0 and DueDate> CURRENT_DATE and Total > Sum(AmountPaid)); ";

        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<OrderInfo> OrderList = new List<OrderInfo>();



        //string Query2 = " Select Due from sal.Payment";
        //MySql.Data.MySqlClient.MySqlCommand cmd2 = new MySql.Data.MySqlClient.MySqlCommand(Query2, conn);
        //MySql.Data.MySqlClient.MySqlDataReader MSQLRD2 = cmd2.ExecuteReader();


        Console.WriteLine("nfenfkenfkenfkenfkernfkre");
        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {

                OrderInfo BV = new OrderInfo();
                BV.OrderNum = ((int?)MSQLRD["orderNum"]);
                BV.Total = ((float?)MSQLRD["Total"]);
                BV.AmountPaidx = (MSQLRD["Sum(AmountPaid)"].ToString());
                BV.DueDate = (MSQLRD["DueDate"].ToString());
                BV.DeliveryStatus = (MSQLRD["Sum(DeliveryStatus)"].ToString());



                OrderList.Add(BV);
            }
        }


        conn.Close();

        var jsonResult = JsonSerializer.Serialize(OrderList);

        Console.WriteLine(jsonResult);
        return jsonResult;

    }


    public  void UpdateDeliveryStatus(string DeliveryStatus, int orderNum)
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        //conn = new MySql.Data.MySqlClient.MySqlConnection();

        //MySqlConnection conn = new MySqlConnection(sqlstring);
        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }
        var x = true;
        if(DeliveryStatus == "Complete")
        {
            x = true;
        }
        if (DeliveryStatus == "Incomplete")
        {
            x = false;
        }

        try
        {
            Console.WriteLine("up");
            //string Query = "INSERT into sal.sheet1 VALUES(@EmployeeID, @Name, @Data)";
            string Query = "UPDATE sal.receipt SET DeliveryStatus = @DeliveryStatus WHERE orderNum = @orderNum;"+
                   "UPDATE sal.OrderData SET OrderStatus = 'In progress' WHERE orderNum = @orderNum;"; 
            if (x == true)
            {
                Query = "UPDATE sal.receipt SET DeliveryStatus = @DeliveryStatus WHERE orderNum = @orderNum;" +
                    "UPDATE sal.OrderData SET OrderStatus = 'Delivered' WHERE orderNum = @orderNum;";
            }
            Console.WriteLine("up");
            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@DeliveryStatus",x);

           /* cmd.Parameters.AddWithValue("@OrderStatus", "Delivered");*/

            cmd.Parameters.AddWithValue("@orderNum", orderNum);
           
            cmd.ExecuteNonQuery();


        }
        catch
        {
            throw;
        }



    }




    public int UpdateOrderStatus(string OrderStatus, int orderNum)
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
        "database=sal";

        //conn = new MySql.Data.MySqlClient.MySqlConnection();

        //MySqlConnection conn = new MySqlConnection(sqlstring);
        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }
      
        

        try
        {
            Console.WriteLine("up");
            //string Query = "INSERT into sal.sheet1 VALUES(@EmployeeID, @Name, @Data)";
            string Query = "UPDATE sal.OrderData SET OrderStatus = @OrderStatus WHERE orderNum = @orderNum;"+
                "UPDATE sal.Receipt SET DeliveryStatus = false WHERE orderNum = @orderNum;"; 
            if (OrderStatus == "Delivered")
            {
              Query = "UPDATE sal.OrderData SET OrderStatus = @OrderStatus WHERE orderNum = @orderNum;" +
                    "UPDATE sal.Receipt SET DeliveryStatus = true WHERE orderNum = @orderNum;";
            }
            Console.WriteLine("up");
            MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);

            cmd.Parameters.AddWithValue("@OrderStatus", OrderStatus);

            cmd.Parameters.AddWithValue("@orderNum", orderNum);

            cmd.ExecuteNonQuery();
            return 0;

        }
        catch(Exception e)
        {
            Console.WriteLine(e.Message);
            return 3;
        }



    }
    /*   public string EditClosedOrders(string DeliveryStatus)
       {







       }*/







    public string getPaymentDetails()
    {

        MySql.Data.MySqlClient.MySqlConnection conn;

        string myConnectionString;

        myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
            "database=sal";

        try
        {
            conn = new MySql.Data.MySqlClient.MySqlConnection();
            conn.ConnectionString = myConnectionString;
            conn.Open();


        }
        catch (MySql.Data.MySqlClient.MySqlException ex)
        {
            throw ex;
        }






        string Query = "select * from sal.receipt ; ";
        MySql.Data.MySqlClient.MySqlCommand cmd = new MySql.Data.MySqlClient.MySqlCommand(Query, conn);
        MySql.Data.MySqlClient.MySqlDataReader MSQLRD = cmd.ExecuteReader();
        List<ReceiptInfo> ReceiptList = new List<ReceiptInfo>();




        if (MSQLRD.HasRows)
        {

            while (MSQLRD.Read())
            {

                ReceiptInfo BV = new ReceiptInfo();
                BV.ReceiptNum = (MSQLRD["ReceiptNum"].ToString());
                BV.OrderNum = ((int?)MSQLRD["orderNum"]);
                BV.CustomerID = (MSQLRD["CustomerID"].ToString());
                BV.CustomerName = (MSQLRD["CustomerName"].ToString());
                BV.AmountPaid = ((float?)MSQLRD["AmountPaid"]);
                BV.DatePaid = (MSQLRD["DatePaid"].ToString());


               
                ReceiptList.Add(BV);
            }
        }


        conn.Close();

        var jsonResult = JsonSerializer.Serialize(ReceiptList);

        Console.WriteLine(jsonResult);
        return jsonResult;


    }







}








//call handling




