﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//import DataTable from 'datatables.net-dt';

//import 'datatables.net-responsive-dt';

//let table = new DataTable('#myTable', {
//    responsive: true
//    $(document).ready(function () {
//        $('#employeeList').DataTable();
//    });
//});



//// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
//// for details on configuring this project to bundle and minify static web assets.

//// Write your JavaScript code.

//var MyArray = [

//    {'EmployeeID':'234','Name': Saloni','Data':'new'}


//]

//buildTable(MyArray)

//function buildTable(data) {

//    //$('table').append(
//    //    '<tr class="DataTable">
//    //    <td class="DataTable"></td>
//    //    <td class="DataTable">Newxxxxx</td>
//    //    <td class="DataTable">Newxxxxx</td>

//    //</tr>'
//    //    )
//    //$('table').append('jhjjkhk')



//    var table = document.getElementById('TableBody')
//    for (var i = 0; i < data.length; i++) {

//        var row = `<tr>
//                         <td>${data[i].EmployeeID}</td>
//                         <td>${data[i].Name}</td>
//                         <td>${data[i].Data}</td>
//                   </tr>`

//                table.innerHTML+=row

//    }
//}

//    var selectedRow = null;
//    var btn = document.querySelector(".button")
//    btn.addEventListener("click", employdata);


//function employdata(){
//    var ax = read_Input_Value();
//    create_Tr_Td(ax);
   // updatefunc(ax);
  //if (selectedRow == null){
  //      create_Tr_Td(ax);
  //  remove_input_value()
  //}
  //else{
  //      updatefunc(ax);
  //  remove_input_value();
  //  selectedRow = null;
  //}

//}

//function read_Input_Value(){
//  var redemp={ }
//  redemp["ename"] = document.querySelector(".empname").value;
//  redemp["des"] = document.querySelector(".data").value;
//  redemp["mob"] = document.querySelector(".mobile").value;
//  redemp["salary"] = document.querySelector(".empsalary").value;
//  return redemp
//}
//function create_Tr_Td(x){
//  var empTable = document.querySelector(".list");
//  var emp_tr = empTable.insertRow(empTable.length);
//  var emp_td1 = emp_tr.insertCell(0);
//  var emp_td2 = emp_tr.insertCell(1);
//  var emp_td3 = emp_tr.insertCell(2);
//  var emp_td4 = emp_tr.insertCell(3);
//  var emp_td5 = emp_tr.insertCell(4);
//  var emp_td6 = emp_tr.insertCell(5);
//  var totalRowCount = document.querySelector(".list tr").length;
//  emp_td1.innerHTML = empTable.rows.length-1;
//  //Note:- .rows.length = return no of row

//  emp_td2.innerHTML = x.ename;
//    emp_td3.innerHTML = x.des;
//    emp_td4.innerHTML = x.mob;
//  emp_td5.innerHTML = x.salary;

//  emp_td6.innerHTML = '<a class="edt" onClick="onEdit(this)">Edit</a>  / <a class="dlt" onClick="onDelete(this)">Delete</a>';
//}

//function remove_input_value(){
//        document.querySelector(".empname").value = " ";
//  document.querySelector(".designation").value= " ";
//  document.querySelector(".mobile").value= " ";
//  document.querySelector(".empsalary").value= " ";
//}

//function onEdit(y){
//        console.log(y);

//  //var selecteventbtn = document.querySelector("a.edt");
//    selectedRow = y.parentElement.parentElement;
//    //document.querySelector(".empid").value = selectedRow.cells[0].innerHTML;
//    document.querySelector(".empname").value = selectedRow.cells[1].innerHTML;
//    document.querySelector(".designation").value = selectedRow.cells[2].innerHTML;
//     document.querySelector(".mobile").value = selectedRow.cells[3].innerHTML;
//    document.querySelector(".empsalary").value = selectedRow.cells[4].innerHTML;
//}

//function updatefunc(redemp){
//        selectedRow.cells[1].innerHTML = redemp.ename;
//  selectedRow.cells[2].innerHTML = redemp.des;
//  selectedRow.cells[3].innerHTML = redemp.mob;
//  selectedRow.cells[4].innerHTML = redemp.salary;

//}


//function onDelete() {
//    if (confirm('Are you sure to delete this record ?')) {
//        var selectdelete = document.querySelector("a.dlt");
//        selectdelete = selectdelete.parentElement.parentElement.remove(0);
//    }
//}






//write a fucntion to collect the data
//write function to parse that data
//of null cases
//write a few functions to add data

var NameClicked = "dd";
var DataClicked = "";
var EmployeeIDClicked = "";




var url = "http://127.0.0.1:3306";
var url2 = "http://localhost:7208/";

 
function testx() {
    console.log('gggggg');
    console.log(jQuery().jquery);
     
    //let response = await fetch('@Url.Action("Get")');
    //console.log('entered js');

    //if (response.ok) { // if HTTP-status is 200-299
    //    // get the response body (the method explained below)
    //    console.log("json");
    //    let json = await response.json();
        
    //    console.log("sk3");
    //} else {
    //    console.log("sk2");
    //    alert("HTTP-Error: " + response.text);
         
    //}
    //console.log("sk3");
    
    fetch('https://localhost:/Home/Get')
        //.then(response => console.log(response))
        .then(response => response.json())
        .then(data => addData(data))
        .catch(error => console.error('Unable to get items.', error));



    //$.ajax({
    //    type: "GET",
    //    dataType: "Json",
    //    url: '@Url.Action("Get")',
    //    async: false,
    //    success: function (data) {
    //        if (data == null || data.data == null) {
    //            //ErrorMessage("", "@Resource_en.YourPhoneDoesNotExistInOurDatabase");
    //            alert("no data");
    //        } else {
    //            //user = data[Object.keys(data)[0]];
    //            //AddVereCode(user.ID);// anather Ajax call 
    //            //SuccessMessage("Done", "@Resource_en.VerificationCodeSentSuccessfully", "Done");
    //            console.log(data);
    //        }
    //    },
    //    error: function () {
    //        ErrorMessage("", '@Resource_en.ErrorOccourd');
    //    }
    //});


}


async function test2() {
  
    console.log('saloni');
}
//ajax or fetch




//async function test2() {
//    let response = await Get();

//    if (response.ok) { // if HTTP-status is 200-299
//        // get the response body (the method explained below)
//        let json = await response.json();



//        console.log("sk1");
//    } else {
//        alert("HTTP-Error: " + response.text);
//        console.log("sk2");
//    }
//    console.log("sk3");


//}

//var button = document.getElementById("my-button");
//button.addEventListener("click", testx);
 





var btn = document.querySelector(".button2");
   btn.addEventListener("click", getNewRow);

function readInput() {
   
    var inputList = { };
    inputList['EName'] = document.querySelector('.empname').value;
    inputList['Data'] = document.querySelector('.data').value;

    //inputList['Mobile'] = document.querySelector('.mobile').value;

    inputList['EmployeeID'] = document.querySelector('.empID').value;

    return inputList;

}

function UpdateTable(information) {
    var info = readInput();
    //var newTable = document.querySelector('.list');
    //var newRow = newTable.insertRow(newTable.length);
    //var newRowCell1 = newRow.insertCell(0);
    //var newRowCell2 = newRow.insertCell(1);
    //var newRowCell3 = newRow.insertCell(2);
    //var newRowCell4 = newRow.insertCell(3);



    //newRowCell1.innerHTML = info.EmployeeID;
    //newRowCell2.innerHTML = info.EName;
    //newRowCell3.innerHTML = info.Data;
    //newRowCell4.innerHTML = info.EmployeeID;
     
    AddEmployeeHelper(info.EmployeeID, info.EName, info.Data)

}

function getNewRow() {
    var x = readInput();
   
    UpdateTable(x);

}

// adding data from sql

//Array{}
var sample = [{ "EmployeeID": "E02003", "Name": "Robert Patel", "Data": "Analyst" },
                { "EmployeeID": "E02003", "Name": "Ram Patel", "Data": "Analyst" }]
console.log(sample[0].EmployeeID);
console.log('hr');

function addData(sample) {
    //conn = new MySql.Data.MySqlClient.MySqlConnection();
    //conn.ConnectionString = myConnectionString;
    //conn.Open();



    //while dataTable.

    //var x = readData(sample);
    UpdateTableUsingData(sample,0);


}



function readData(sample,m) {

    var inputList = {};


    inputList['EName'] = sample[m].Name;
    inputList['Data'] = sample[m].Data;

    //inputList['Mobile'] = "kkk";

    inputList['EmployeeID'] = sample[m].EmployeeID;

    return inputList;

}

function UpdateTableUsingData(information, m) {
    while (m < information.length) {

    var info = readData(information,m);
    var newTable = document.querySelector('.list');
    var newRow = newTable.insertRow(newTable.length);
    var newRowCell1 = newRow.insertCell(0);
    var newRowCell2 = newRow.insertCell(1);
    var newRowCell3 = newRow.insertCell(2);
        //var newRowCell4 = newRow.insertCell(3);





        newRowCell1.innerHTML = info.EmployeeID;
        newRowCell2.innerHTML = info.EName;
        newRowCell3.innerHTML = info.Data;
        m+=1

    }

}





 
    //public List < EmployeeInfo >
//    function Get(){
//    //string sqlstring = "server=; port= ; user id =;Password=;Database=;";
//    MySql.Data.MySqlClient.MySqlConnection conn;
//    string myConnectionString;

//    myConnectionString = "server=127.0.0.1;port=3306;uid=root;" +
//        "database=sal";

//    //conn = new MySql.Data.MySqlClient.MySqlConnection();

//    //MySqlConnection conn = new MySqlConnection(sqlstring);
//    try {
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
//    List < EmployeeInfo > EmployeeList = new List<EmployeeInfo>();

//    if (MSQLRD.HasRows) {

//        while (MSQLRD.Read()) {
//            EmployeeInfo BV = new EmployeeInfo();
//            BV.EmployeeID = (MSQLRD["EmployeeID"].ToString());
//            BV.Name = (MSQLRD["Name"].ToString());
//            BV.Data = (MSQLRD["Data"].ToString());
//            EmployeeList.Add(BV);
//        }
//    }
//    conn.Close();
//    return EmployeeList;
//}



//protected void Get()
//{
//    String Name = Request.QueryString["Name";

//    conn = new MySql.Data.MySqlClient.MySqlConnection();
//   // SqlConnection sqlCon = new SqlConnection("xx");
//    conn.Open();
//    SqlCommand sqlCmd = new SqlCommand("Select * from sheet1 where Name = Robert Patel", conn)
//}







//console.log('klklk')

//const placeholder = document.getElementById("sal")
////    .getAttribute("placeholder");
//placeholder.addEventListener("click", myFunction);

//function myFunction() {
//    $('table').append('jhjjkhk')
//    //document.getElementById("sal").c;
//}


//}







function getData() {
   //fetch('https://localhost:7208/Home/Get')
    fetch('https://localhost:7208/Home/Get')
        
       .then(response => response.json())
       .then(data => getDataHelper(data))
       
}

function getDataHelper(data) {
    sample = data;

    let tab = "";
    var m = 0;
    for (m = 0; m < sample.length; m++) {

        tab += `<tr>
           <td>${sample[m].EmployeeID}</td>
           <td>${sample[m].Name}</td>
            <td>${sample[m].Data}</td>
            </tr>`
    }
    document.getElementById("tbody").innerHTML = tab;


   $(document).ready(function () {
        $.noConflict();
       var table = $('#employeeList').DataTable({
           scrollY: '1000px',
           scrollX: true,
           scrollCollapse: true,
           paging: false,

           //processing: true,
           //serverSide: true,
           //ajax: '../server_side/scripts/server_processing.php'

          
       });

       //$('#employeeList').on('mouseover', 'tbody tr', function () {
       //    var info = table.row(this).data();
       //    document.querySelector(".empname").value = info[1];
       //    document.querySelector(".data").value = info[2];
       //    document.querySelector(".empID").value = info[0];
           
       //  //table.cell({ row: this.parentNode.rowIndex, }).data()
       //})
       //@override
       $('#employeeList').on('click', 'tbody tr', function () {
          //window.location("/Home/DeleteData")
           var info = table.row(this).data();
           //document.querySelector(".empname").value = info[1];
           //document.querySelector(".data").value = info[2];
           //document.querySelector(".empID").value = info[0];
   
           location.replace("https://localhost:7208/Home/AddData?param1="+ info[0] + "&param2=" + info[1] + "&param3="+info[2]);
           console.log(NameClicked);
          // NameClicked = info[1];
           //DataClicked = info[2];
           //EmployeeIDClicked = info[0];
           console.log(NameClicked);
            
           //location.replace("/Home/DeleteData")

           //table.cell({ row: this.parentNode.rowIndex, }).data()
       })
       $('#employeeList').on('dblclick', 'tbody tr', function () {
           var info = table.row(this).data();
           document.querySelector(".empname").value = "";
           document.querySelector(".data").value = "";
           document.querySelector(".empID").value = "";

           //table.cell({ row: this.parentNode.rowIndex, }).data()
       })



        
            });
}

//$(employeeList).DataTable({




//})
//{
//    $.noConflict();
//                var table = $('#employeeList').DataTable();
//            })



function AddEmployeeHelper(EmployeeID, Name, Data) {
    //var info = readInput();
    //var newTable = document.querySelector('.list');
    //var newRow = newTable.insertRow(newTable.length);
    //var newRowCell1 = newRow.insertCell(0);
    //var newRowCell2 = newRow.insertCell(1);
    //var newRowCell3 = newRow.insertCell(2);
    //newRowCell1.innerHTML = info.EmployeeID;
    //newRowCell2.innerHTML = info.EName;
    //newRowCell3.innerHTML = info.Data;
    //.then(response => response.json())
        //.then(data => addData(data))
    console.log(Name);





    fetch('https://localhost:7208/Home/Put/?EmployeeID=' + EmployeeID + '&Name=' + Name + '&Data=' + Data)
        .then(response => response.json())
        .then(data => {
            
            if (data == 1) {

                console.log('ijfoierjf');
                //alert('EmployeeID is required')
                modal('EmployeeID is required',false);
            }
            if (data == 3) {
                //alert('EmployeeID  already exists')
                if (confirm('An Employee with this EmployeeID already exists. Click OK to update Employee Information '))
                { updateEmployeeData(EmployeeID, Name, Data) }
                modal('An Employee with this EmployeeID already exists. Click OK to update Employee Information ', true)
                //if (SaveChangesClicked()) {
                    
                //    alert("jri");
                //}
                //if (document.getElementById('update').clicked == true) {
                //    updateEmployeeData(EmployeeID, Name, Data);
                //}

            }
            else {

                //location.reload();
                //$(document).ready(function () {
                //    $('#employeeList').DataTable({
                //        processing: true,
                //        serverSide: true,
                //        ajax: '../server_side/scripts/server_processing.php'
                //    })
                //})
              
            }
           
        })
    //location.reload();
    
}

 



//exe prepare


var btnd = document.querySelector(".delete_button")
btnd.addEventListener("click", RemoveEmployeeHelper);

function RemoveEmployeeHelper() {
    var info = readInput();
    EmployeeID = info.EmployeeID;
    //fetch('https://localhost:7208/Home/Delete/?EmployeeID=' + EmployeeID)

    fetch('https://localhost:7208/Home/Delete/?EmployeeID=' + EmployeeID)
        .then(response => response.json())
        .then(data => {

            if (data == 1) {
                console.log('1');

                modal('EmployeeID is required', false)
                console.log('2');
                 
                console.log('3');
            }
            if (data == 2) {
                console.log('ijfoierjf');
                
                modal('Employee ID does not exist',false)
            }
            
            else {
                ////$('#employeeList').DataTable().ajax.reload();
                //$('#employeeList').DataTable({
                //    processing: true,
                //    serverSide: true,
                //    ajax: '../server_side/scripts/server_processing.php'
                //})

                 

            }

            //location.reload();

        })  

}


function showForm(e) {
    //window.location("Home/DisplayForm");
    //e.preventDefault();
    //location.replace("https://localhost:7208/Home/DisplayForm");
    document.getElementById('formElement').style.display = 'flex';
    e.preventDefault();
    //location.reload();
    //e.preventDefault();
      
     
  
}

function openAddDataForm() {
    document.getElementById("formdata").style.display = "block";
}

function closeAddDataForm() {
    document.getElementById("formdata").style.display = "none";
}

//function func() {
//    location.replace("https://localhost:7208/Home/DisplayForm");
//    e.preventDefault();
//}


function updateEmployeeData(EmployeeID, Name, Data) {
    fetch('https://localhost:7208/Home/UpdateEmployeeData/?EmployeeID=' + EmployeeID + '&Name=' + Name + '&Data=' + Data);
}


//function m() {

//    $(document).on('click', '#LikeArticle', function (e) {
//        e.preventDefault();
//        var data = $(this).attr('href');
//        NProgress.start();
//        $.ajax({
//            method: 'get',
//            url: '/Home/ViewData',
//            data: data,
//            async: true,
//            cache: false,
//            success: function (data) {
//                console.log(data);

//                $('.LikeACountMemory-' + data.html.data.blog_id).html(data.html.view);
//            }
//        });
//        NProgress.done();
//        e.preventDefault();
//        e.stopPropagation();
//    });

////href="https://localhost:7208/Home/ViewTable"
//    });

//}


//function checkHref(event) {
//    // Prevent the default behavior of the link
//    event.preventDefault();

//    // Check if the href has been visited or clicked
//    if (window.location === event) {
//        // Perform your desired action here
//        document.getElementById('formElement').style.display = 'flex';
//        alert('done');
//    }

//    // You can also navigate to the href programmatically if needed
//    // window.location.href = event.target.href;
//}


//function checkHref(event) {
//    // Prevent the default behavior of the link
//    event.preventDefault();

//    // Check if the href has been visited or clicked
//    if (window.location.href === event.target.href) {
//        // Perform your desired action here
//        console.log("Href has been visited!");
    

//    // You can also navigate to the href programmatically if needed
//    // window.location.href = event.target.href;
//}





var btnI = document.getElementById("item1")
btnI.addEventListener("click", nice(event));
function nice(e) {
     
    location.replace("https://localhost:7208/Home/ViewTable");
    console.log('ff');
     
     
}


//Dashboard
function openSideNav() {
    var sideBarDisplay = document.getElementById("side-bar").style.width;
    if (sideBarDisplay == "150px") {
        document.getElementById("side-bar").style.width = "0px";
        document.getElementById("body-content").style.marginLeft = "0px";
        document.getElementById("side-navText").style.textDecoration.fontsize = "0";
    } else {
        document.getElementById("side-bar").style.width = "150px";
        document.getElementById("body-content").style.marginLeft = "150px";
        document.getElementById("side-navText").style.fontSize = "0";
        
       
    }
}  



function CellClicked() {
    //$('#employeeList').on('click', 'tbody tr', function () {
    //    var info = table.row(this).data();
    //    document.querySelector(".empname").value = info[1];
    //    document.querySelector(".data").value = info[2];
    //    document.querySelector(".empID").value = info[0];

    //})
    
    var q = window.location.search;
    var params = new URLSearchParams(q);

    const value = params.get('param1');

    console.log(value);
    document.querySelector(".empname").value = params.get('param2');
    document.querySelector(".data").value = params.get('param3');
    document.querySelector(".empID").value = params.get('param1');
    //////console.log(window.NameClicked);
    //NameClicked = 'ssss';
    
     

}
 





function modal(instruction, bool) {
    console.log(instruction);
 
    console.log(2);
    //$('modal-body').append(
    //    '<p>${instruction}</p>'

    //)
    if (bool == false) {
        console.log(bool);
        document.getElementById("update").style.display ="none" ;
    }
     

    //document.getElementById("instruction").innerHTML = instruction;
    document.getElementById("ModalButton").click();
    console.log(3);
    //$("#myModal").trigger('click');
    console.log(4);

    //if (document.getElementById('update').clicked == true) {
    //    console.log('clicked===')
    //    updateEmployeeData(EmployeeID, Name, Data);
    //}

    


}

//function SaveChangesClicked() {

//    if (document.getElementById('update').clicked == true) {
//        return true;
//    }
//    else {
//        return false;    }
//}





/// write a function so that when you submit, it checks that order number is unique and that customer id and measurement id are
// either completely unique or are consistent with data i.e that customer id has that measuremnt id


// then write  functions that have various put requests to different data tables.




var m = document.querySelector(".button3")
m.addEventListener("click", AddCustomerDataHelper('123', 'sk', '123', "eee", "333", "456"));

//function AddCustomerDataHelper(CustomerID, Name, Phone, Address, Email, MeasurementID){

//    console.log('ijfoierjf');

//    fetch('https://localhost:7208/Home/AddMeasurementID/?MeasurementID=' + MeasurementID)
//        .then(response => response.json())
//        .then(data => {

//            if (data == 1) {
//                console.log('ijfoierjf');
//                alert('wrong');
//            }
//            if (data == 0) {

//                fetch('https://localhost:7208/Home/AddCustomerData/?CustomerID=' + CustomerID + '&Name=' + Name + '&Phone=' + Phone + '&Address=' + Address  + '&Email=' + Email + '&MeasurementID=' + MeasurementID)
//                    .then(response => response.json())
//                    .then(data => {

//                        if (data == 1) {

//                            alert('wrong');
//                        }
//                        if (data == 0) {
//                            alert('done');

//                        }
                       



//                    })

//            }
            


//        })

//}



//function AddNewCustomerIDHelper() {
//    console.log('here');

//    var CustomerID = document.querySelector('.newCustomerID').value;

//    fetch('https://localhost:7208/Home/AddNewCustomerID/?CustomerID=' + CustomerID)
//        .then(response => response.json())
//        .then(data => {

//            if (data == 1) {
//                alert('ex');
//                //modal('CustomerID cannot be null', false);
//            }
//            if (data == 3) {
//                modal('CustomerID already exists', false)

//            }
//            if (data==0) {
                
//                location.replace('https://localhost:7208/Home/NewCustomerDataEntry?param1='+ CustomerID)
//            }

//        })

//}




function NewCustomerDataEntryHelper() {
    var q = window.location.search;
    var params = new URLSearchParams(q);
    const CustomerID = params.get('param1');
    
    var Name = document.querySelector('.customerName').value;
    var Phone = document.querySelector('.phone').value;
    var Email = document.querySelector('.email').value;
    var Address = document.querySelector('.address').value;

    console.log(CustomerID);

    fetch('https://localhost:7208/Home/NewCustomerDataEntryCS?CustomerID=' + CustomerID + '&Name=' + Name + '&Phone=' + Phone + '&Email=' + Email + '&Address=' + Address)
        .then(response => response.json())
        .then(data => {

            if (data == 3) {

                modal('wrong',false);
            }
            if (data == 0) {
                alert('pheew')
                

            }




        })

}


function ExistingCustomerDataEntryHelper() {
    var q = window.location.search;
    var params = new URLSearchParams(q);
    const CustomerID = params.get('param1');


    ExistingEmployeeDataEntry
    document.getElementById("tbody").innerHTML = tab;

    fetch('https://localhost:/Home/ExistingEmployeeDataEntry?CustomerID=' + CustomerID)
        //.then(response => console.log(response))
        .then(response => response.json())
        .then(data => {


            console.log(data);



        })
}


$(document).ready(function () {
    var panels = $('.vote-results');
    var panelsButton = $('.dropdown-results');
    panels.hide();

    //Click dropdown
    panelsButton.click(function () {
        //get data-for attribute
        var dataFor = $(this).attr('data-for');
        var idFor = $(dataFor);

        //current button
        var currentButton = $(this);
        idFor.slideToggle(400, function () {
            //Completed slidetoggle
            if (idFor.is(':visible')) {
                currentButton.html('Hide Results');
            }
            else {
                currentButton.html('View Results');
            }
        })
    });
});

function hi() {
    alert("njnjn")
}








function getPattern(id, type) {
    //fetch('https://localhost:7208/Home/GetPattern')
    fetch('https://localhost:7208/Home/GetPattern')

        .then(response => response.json())
        .then(data => getPatternHelper(data, id, type))

}

function getPatternHelper(data, id, type) {
    sample = data;
    if (type == "datatable") {

        let tab = "";
        var m = 0;
        for (m = 0; m < sample.length; m++) {

            tab += `<tr>
           <td>${sample[m].Pattern}</td>
            <td>${sample[m].Price}</td>
 
            </tr>`
        }
        document.getElementById(id).innerHTML = tab;
        $(document).ready(function () {
            $.noConflict();
            var table = $('#employeeList').DataTable({
                scrollY: '1000px',
                scrollX: true,
                scrollCollapse: true,
                paging: false,

                //processing: true,
                //serverSide: true,
                //ajax: '../server_side/scripts/server_processing.php'


            });
        })
    }

    if (type == "select") {

        let tab = "";
        var m = 0;
        for (m = 0; m < sample.length; m++) {

            tab += `<option value="${sample[m].Pattern}">${sample[m].Pattern}</option>`
        }
        document.getElementById(id).innerHTML += tab;


    }

    //write an onclick func for this
    if (type == "price") {

        var PatternType = document.getElementById("getPattern").value;
        
        let tab = "";
        var m = 0;
        for (m = 0; m < sample.length; m++) {
            if (sample[m].Pattern == PatternType) {
                tab+=sample[m].Price
                 
            }

            //tab += `<option value="${sample[m].Pattern}">${sample[m].Pattern}</option>`
        }
    
        document.getElementById(id).value = tab;
        document.getElementById('getTotal').value = document.getElementById("getQuantity").value * tab;
        document.getElementById('getDue').value = document.getElementById("getTotal").value - document.getElementById("getAdvance").value;
    }





}



function getMeasurementType(id, type) {
    //fetch('https://localhost:7208/Home/GetMeasurementType')
    fetch('https://localhost:7208/Home/GetMeasurementType')

        .then(response => response.json())
        .then(data => getMeasurementTypeHelper(data, id, type))

}

function getMeasurementTypeHelper(data,id, type) {
    sample = data;
    if (type == "datatable") { 

    let tab = "";
    var m = 0;
    for (m = 0; m < sample.length; m++) {

        tab += `<tr>
           <td>${sample[m]}</td>
 
            </tr>`
    }
    document.getElementById(id).innerHTML = tab;
    $(document).ready(function () {
        $.noConflict();
        var table = $('#employeeList').DataTable({
            scrollY: '1000px',
            scrollX: true,
            scrollCollapse: true,
            paging: false,

            


        });
    })
    }


    if (type == "select") {

        let tab = "";
        var m = 0;
        for (m = 0; m < sample.length; m++) {

            tab += `<option value="${sample[m]}">${sample[m]}</option>`
        }
        document.getElementById(id).innerHTML += tab;


    }


}








function getCustomer(id, type) {
    //fetch('https://localhost:7208/Home/GetCustomer')
    fetch('https://localhost:7208/Home/GetCustomer')

        .then(response => response.json())
        .then(data => getCustomerHelper(data, id, type))

}

function getCustomerHelper(data, id, type) {
    sample = data;

    if (type == "all") {
        let tab = "";
        var m = 0;
        for (m = 0; m < sample.length; m++) {
           
            tab += `<tr>
           <td>${sample[m].CustomerID}</td>
           <td>${sample[m].CustomerName}</td>
           <td>${sample[m].Phone}</td>
           <td>${sample[m].Email}</td>
           <td>${sample[m].Address}</td>
 
            </tr>`
        }
        document.getElementById(id).innerHTML = tab;
        $(document).ready(function () {
            $.noConflict();
            var table = $('#employeeList').DataTable({
                scrollY: '1000px',
                scrollX: true,
                scrollCollapse: true,
                paging: false,




            });
        })
    }


    if (type == "select") {

        let tab = "";
        var m = 0;
        for (m = 0; m < sample.length; m++) {

            tab += `<option value="${sample[m].CustomerID}">${sample[m].CustomerID}</option>`
        }
        document.getElementById(id).innerHTML += tab;



    }


}



function getCustomerName(id) {
    //fetch('https://localhost:7208/Home/GetCustomer')
    fetch('https://localhost:7208/Home/GetCustomer')

        .then(response => response.json())
        .then(data => getCustomerNameHelper(data,id))

}
function getCustomerNameHelper(data, id) {
    sample = data;

     
        let tab = "";
        var m = 0;
        for (m = 0; m < sample.length; m++) {

            tab += `<option value="${sample[m].CustomerName}">${sample[m].CustomerName}</option>`
        }
        document.getElementById(id).innerHTML += tab;

  
    


}

function getCustomerIDByName(CustomerName,id){

    fetch('https://localhost:7208/Home/GetCustomerIDByName/?CustomerName='+CustomerName)

        .then(response => response.json())
        .then(data => {
            sample = data;


            let tab = "";
            var m = 0;
            for (m = 0; m < sample.length; m++) {

                tab += `<option value="${sample[m].CustomerID}">${sample[m].CustomerID}</option>`
            }
           // document.getElementById(id).innerHTML = "";
            document.getElementById(id).innerHTML = `<option value="" disabled selected hidden>CustomerID</option>`;
            //document.getElementById(id).innerHTML = "";
            document.getElementById(id).innerHTML += tab;
        })

}







function AddMeasurementTypeHelper() {
    //console.log("new type" + document.getElementById("MeasurementType").innerHTML);
    var newType = document.getElementById("MeasurementType").value;
    
    fetch('https://localhost:7208/Home/AddMeasurementType/?MeasurementType=' + newType)
        .then(response => response.json())
        .then(data => {

            //if (data == 1) {

            //    console.log('ijfoierjf');
                
            //    modal('EmployeeID is required', false);
            //}
             
            if (data == 3) {

                alert('Type  already exists')
                //if (confirm('An Employee with this EmployeeID already exists. Click OK to update Employee Information ')) { updateEmployeeData(EmployeeID, Name, Data) }
                //modal('An Employee with this EmployeeID already exists. Click OK to update Employee Information ', true)
       
            }
            else {
 

            }



        })

}




function openForm() {
    document.getElementById("myForm").style.display = "block";
        }

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}






function AddPatternHelper() {
    //console.log("new type" + document.getElementById("MeasurementType").innerHTML);
    var newType = document.getElementById("Pattern").value;

    fetch('https://localhost:7208/Home/AddPattern/?Pattern=' + newType)
        .then(response => response.json())
        .then(data => {

            //if (data == 1) {

            //    console.log('ijfoierjf');

            //    modal('EmployeeID is required', false);
            //}

            if (data == 3) {

                alert('Type  already exists')
                //if (confirm('An Employee with this EmployeeID already exists. Click OK to update Employee Information ')) { updateEmployeeData(EmployeeID, Name, Data) }
                //modal('An Employee with this EmployeeID already exists. Click OK to update Employee Information ', true)

            }
            else {


            }



        })
}






function AddCustomerHelper() {
    //console.log("new type" + document.getElementById("MeasurementType").innerHTML);
    var CustomerID = document.getElementById("CustomerID").value;
    var CustomerName = document.getElementById("CustomerName").value;
    var Phone = document.getElementById("Phone").value;
    var Email = document.getElementById("Email").value;
    var Address = document.getElementById("Address").value;

    fetch('https://localhost:7208/Home/AddCustomer/?CustomerID=' + CustomerID +'&CustomerName='+ CustomerName + '&Phone=' + Phone + '&Email=' + Email + '&Address=' + Address)
        .then(response => response.json())
        .then(data => {

            //if (data == 1) {

            //    console.log('ijfoierjf');

            //    modal('EmployeeID is required', false);
            //}

            if (data == 3) {

                alert('CustomerID  already exists')
                //if (confirm('An Employee with this EmployeeID already exists. Click OK to update Employee Information ')) { updateEmployeeData(EmployeeID, Name, Data) }
                //modal('An Employee with this EmployeeID already exists. Click OK to update Employee Information ', true)

            }

            if (data == 0) {

                


            }
            else {


            }



        })
}








function add() {
    var new_chq_no = parseInt($('#total_chq').val()) + 1;
    var new_input = "<input type='text' id='new_" + new_chq_no + "'>";
    //var new_input ="<li> <select id="cars" name="cars" style="width:80%"> <option value="" disabled selected hidden>Name</option><option value="Firefox">Two</option><option value="Chrome">Tgree</option><option value="Opera">frrrg</option><option value="Safari">hi</option></select></li>"
    $('#new_chq').append(new_input);
    $('#total_chq').val(new_chq_no)
}
function remove() {
    var last_chq_no = $('#total_chq').val();
    if (last_chq_no > 1) {
        $('#new_' + last_chq_no).remove();
        $('#total_chq').val(last_chq_no - 1);
    }
}




//Add new measurement type and measurement OR update existing measurement type
function AddMeasurementFieldHelper(event) {

    var CustomerID = document.getElementById("getCustomerID").value;
   
    var MeasurementType = document.getElementById("MeasurementType").value;
    console.log(MeasurementType);
    var Measurement = document.getElementById("Measurement").value;
    var Metric = document.getElementById("Metric").value;
    event.preventDefault();


    fetch('https://localhost:7208/Home/CheckMeasurementField/?CustomerID=' + CustomerID + '&MeasurementType=' + MeasurementType)

        .then(response => response.json())
        .then(data => {
            if (data == 1) {
               

                if (confirm('This measurement already exists. Do you want to update it?')) {
                    fetch('https://localhost:7208/Home/UpdateCustomerMeasurements/?CustomerID=' + CustomerID + '&MeasurementType=' + MeasurementType + '&Measurement=' + Measurement + '&Metric=' + Metric)

                    .then(response => response.json())
                    .then(data => {
                        console.log('done');
                    })}

             
            }

            if (data == 0) {
                fetch('https://localhost:7208/Home/AddMeasurementField/?CustomerID=' + CustomerID + '&MeasurementType=' + MeasurementType + '&Measurement=' + Measurement + '&Metric=' + Metric)

                    .then(response => response.json())
                    .then(data => {
                        console.log('done');
                    })
            }
        })

     
}


function getCustomerMeasurementDetails(event) {

    var CustomerID = document.getElementById("getCustomerID").value;
    event.preventDefault();
    fetch('https://localhost:7208/Home/GetCustomerMeasurementDetails/?CustomerID='+CustomerID)

        .then(response => response.json())
        .then(data => getCustomerMeasurementDetailsHelper(data))



}


function getCustomerMeasurementDetailsHelper(data) {
    sample = data;

    let tab = "";
    var m = 0;
    for (m = 0; m < sample.length; m++) {

        tab += `<tr>
           <td>${sample[m].MeasurementType}</td>
           <td>${sample[m].Measurement}</td>
           <td>${sample[m].Metric}</td>
            </tr>`
    }
    document.getElementById("customerMeasurementDetailsBody").innerHTML = tab;
    $(document).ready(function () {
        $.noConflict();
        var table = $('#employeeList').DataTable({
            scrollY: '1000px',
            scrollX: true,
            scrollCollapse: true,
            paging: false,

            //processing: true,
            //serverSide: true,
            //ajax: '../server_side/scripts/server_processing.php'


        });
    })

    document.getElementById("display_tableMK").style.display = "flex";

    getMeasurementType("MeasurementType","select");



   // document.getElementById("MeasurementType").innerHTML+=




}


function loadRequiredFunctionsCreateOrder(){
    //getCustomer('getCustomerID', 'select');
    getCustomerName('getCustomerName');
   // CustomerName = document.getElementById("getCustomerName").value;
   //getCustomerIDByName(CustomerName, 'getCustomerID');
    getPattern("getPattern", "select");

}


function CreateOrderFuncHelper() {

    var CustomerID = document.getElementById("getCustomerID").value;
    var Pattern = document.getElementById("getPattern").value;
    var DueDate = document.getElementById("getDueDate").value;
    var Quantity = document.getElementById("getQuantity").value;
    var Total = document.getElementById("getTotal").value;
    var Advance = document.getElementById("getAdvance").value;
    var Due = document.getElementById("getDue").value
    console.log(DueDate);
    console.log(CustomerID);
    fetch('https://localhost:7208/Home/CreateOrderFunc/?CustomerID=' + CustomerID + '&Pattern=' + Pattern + '&DueDate=' + DueDate + '&Quantity=' + Quantity+ '&Total='+Total+'&Advance='+Advance+'&Due='+Due )
        .then(response => response.json())
        .then(data => {
            alert('done');
        })
}






function PriceCheck(that) {
    //if (that.value == "other") {
    //    alert("check");
    //    document.getElementById("ifYes").style.display = "block";
    //} else {
    //    document.getElementById("ifYes").style.display = "none";
    //}
 
    var x = that.value;
    
    getPattern("getPrice", "price");
}

function changeTotal() {
   // document.getElementById("getQuantity").value = 5;
     

    document.getElementById('getTotal').value = document.getElementById("getQuantity").value * document.getElementById("getPrice").value;
    document.getElementById('getDue').value = document.getElementById("getTotal").value - document.getElementById("getAdvance").value;
}

 
function getPatternSalesHelper() {



    fetch('https://localhost:7208/Home/getPatternSalesGraph')

        .then(response => response.json())
        .then(data => {
            let sample = data;
            let tab = [];
            let rab = [];
            var m = 0;
            for (m = 0; m < sample.length; m++) {

                tab.push(`${sample[m].Pattern}`)
                rab.push(`${sample[m].COUNT}`)
            }
            rab.push(0);
            



            //const xArray = rab;
            //const yArray = tab;

            //const datax = [{
            //    x: xArray,
            //    y: yArray,
            //    type: "bar",
            //    orientation: "h",
            //    marker: {color: "rgba(14, 27, 35)" }
            //}];

            //const layout = { title: "Pattern Sales" };

            //Plotly.newPlot("myPlot", datax, layout);




            console.log(rab);
            console.log(tab);
            const xValues = tab;
            const yValues = rab;
            const barColors = "teal";


            new Chart("myChart", {

                type: "bar",
                 
                data: {
                     
                    labels: xValues,

                    datasets: [{
                        maxBarThickness: 8,
                        barPercentage: 0.5,
                       
                        minBarLength: 2,
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: "Pattern Sales",


                    }

                }
            });
            //insert NumDeliveryDueHelper(); here
            NumDeliveryDueHelper()
        })
 

}




function NumDeliveryDueHelper() {
    fetch('https://localhost:7208/Home/NumDeliveryDue')

        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("NumDeliveryDue").innerHTML = data[0].COUNT;


        })

}




function getOrders() {

console.log("fhfhh")
    fetch('https://localhost:7208/Home/GetOrders')

        .then(response => response.json())
        .then(data => {


            sample = data;

            let tab = "";
            var m = 0;
            for (m = 0; m < sample.length; m++) {

                tab += `<tr>
           <td>${sample[m].OrderNum}</td>
           <td>${sample[m].CustomerID}</td>
            <td>${sample[m].CustomerName}</td>
            <td>${sample[m].AmountDue}</td>
            <td>${sample[m].DueDate}</td>
            </tr>`
            }
            document.getElementById("orderBody").innerHTML = tab;


            $(document).ready(function () {
                $.noConflict();
                var table = $('#employeeList').DataTable({
                    scrollY: '1000px',
                    scrollX: true,
                    scrollCollapse: true,
                    paging: false,


                });
                $('#employeeList').on('click', '#orderBody tr', function () {

                    var info = table.row(this).data();
                    var x;
                    for (m = 0; m < sample.length; m++) {
                        if (sample[m].OrderNum == info[0]) {
                           x = sample[m]
                            break;
                        }

                    }

                    document.getElementById("headerModal").innerHTML = "Order No. " + x.OrderNum;
                    //document.getElementById("CustomerName").innerHTML = "Customer Name : " + x.CustomerName;
                    //document.getElementById("Phone").innerHTML = "Phone : " + x.Phone;
                    //document.getElementById("Email").innerHTML = "Email : " + x.Email;
                    //document.getElementById("Address").innerHTML = "Address : " + x.Address;
                    document.getElementById("modalTbody").innerHTML =
                    `<tr>
                     <td>${x.Pattern}</td>
                     <td>${x.Quantity}</td>
                     <td>${x.Total}</td>
                     <td>${x.Advance}</td>
                     <td>${x.AmountDue}</td>
                     <td>${x.DueDate}</td>
                    </tr>`
                    //console.log(x);


                    document.getElementById("hori").innerHTML=
                        `<tr>
                        <th>Name</th>
                     <td>${x.Name}</td>
                     </tr>
                      <tr>
                     <th>Phone</th>
                     <td>${x.Phone}</td>
                     </tr>
                     <tr>
                     <th>Email</th>
                     <td>${x.Email}</td>
                     </tr>
                     <tr>
                     <th> Address</th>
                      <td>${x.Address}</td>
                     </tr>`

                    modal(x,false)






                });


            });

        });
 
}