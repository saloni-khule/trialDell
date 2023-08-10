// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
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
var url2 = "http://localhost:7238/";

 
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
 





/*var btn = document.querySelector(".button2");
   btn.addEventListener("click", getNewRow);*/

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
    fetch('https://localhost:7238/Home/Get')
        
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
           /*     scrollY: '1000px',*/
           scrollX: true,
           scrollCollapse: true,
           /*paging: false,*/


           bLengthChange: true,
           "iDisplayLength": 10,
           bInfo: false,
           responsive: true,
           "bAutoWidth": false
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
   
           location.replace("https://localhost:7238/Home/AddData?param1="+ info[0] + "&param2=" + info[1] + "&param3="+info[2]);
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





    fetch('https://localhost:7238/Home/Put/?EmployeeID=' + EmployeeID + '&Name=' + Name + '&Data=' + Data)
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

    fetch('https://localhost:7238/Home/Delete/?EmployeeID=' + EmployeeID)
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
    fetch('https://localhost:7238/Home/UpdateEmployeeData/?EmployeeID=' + EmployeeID + '&Name=' + Name + '&Data=' + Data);
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
     
    location.replace("https://localhost:7238/Home/ViewTable");
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

function deleteCustomer(event) {
    event.preventDefault();
    var q = window.location.search;
    var params = new URLSearchParams(q);

    const CustomerID = params.get('param1');
    fetch('https://localhost:7238/Home/DeleteCustomer?CustomerID=' + CustomerID )
        .then(response => response.json())
        .then(data => {
            if (data == 1) {
                modal('This customer cannot be deleted since they have an existing order',false);


            }

            if (data == 3) {

              modal('error',false)
            }
            if (data == 0) {
                modal('done',false)


            }




        })


}






function deleteOrder(event) {
    event.preventDefault();
    var q = window.location.search;
    var params = new URLSearchParams(q);

    const orderNum = params.get('param2');
    fetch('https://localhost:7238/Home/DeleteOrder?orderNum=' + orderNum)
        .then(response => response.json())
        .then(data => {
            if (data == 1) {
                alert('This order cannot be deleted since a payment has been made against it');


            }

            if (data == 3) {

                alert('error')
            }
            if (data == 0) {
                alert('done')


            }




        })


}








function deleteMeasurement() {
  //  event.preventDefault();
    var MeasurementType = document.getElementById('MeasurementType').value;
    fetch('https://localhost:7238/Home/DeleteMeasurement?MeasurementType=' + MeasurementType)
        .then(response => response.json())
        .then(data => {
            if (data == 1) {
                alert('This type cannot be deleted since it is in use');


            }

            if (data == 3) {

                alert('error')
            }
            if (data == 0) {
                alert('done')


            }




        })


}

 






function updateCustomer(event) {
    
    event.preventDefault();
    var q = window.location.search;
    var params = new URLSearchParams(q);

    var CustomerID = params.get('param1');
    
    var CustomerName = document.getElementById('CustomerName').value;
/*    alert(CustomerName);*/
    var Phone = document.getElementById('Phone').value;
   /* alert(Phone);*/
    var Email = document.getElementById('Email').value;
  /*  alert(Email);*/
    var Address = document.getElementById('Address').value;
/*    alert(Address);*/
    fetch('https://localhost:7238/Home/UpdateCustomer?CustomerID=' + CustomerID +'&CustomerName='+CustomerName+'&Phone='+Phone+'&Email='+Email+'&Address='+Address)
        .then(response => response.json())
        .then(data => {
            if (data == 1) {
                modal('This customer cannot be deleted since they have an existing order', false);


            }

            if (data == 3) {

                modal('error', false);
            }
            if (data == 0) {
                modal('done', false);


            }




        })


}










function modal(instruction, bool) {
    console.log(instruction);
 
    console.log(2);
/*    $('modal-body').append(
        '<p>${instruction}</p>'

    )*/
    if (bool == false) {
        console.log(bool);
        document.getElementById("update").style.display ="none" ;
    }
     
    document.getElementById("instruction").innerHTML   = instruction;
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

    fetch('https://localhost:7238/Home/NewCustomerDataEntryCS?CustomerID=' + CustomerID + '&Name=' + Name + '&Phone=' + Phone + '&Email=' + Email + '&Address=' + Address)
        .then(response => response.json())
        .then(data => {

            if (data == 3) {

                modal('wrong',false);
            }
            if (data == 0) {
                /*alert('pheew')
                */

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
/*    alert("njnjn")*/
}








function getPattern(id, type) {
    //fetch('https://localhost:7208/Home/GetPattern')
    fetch('https://localhost:7238/Home/GetPattern')

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
            <td><img src="${sample[m].Image}" style="max-width:300px;max-height:300px;"></td>
 
            </tr>`
        }
        document.getElementById(id).innerHTML = tab;
        $(document).ready(function () {
            $.noConflict();
            var table = $('#employeeList').DataTable({
                /*     scrollY: '1000px',*/
                scrollX: true,
                scrollCollapse: true,
                /*paging: false,*/


                bLengthChange: true,
                "iDisplayLength": 10,
                bInfo: false,
                responsive: true,
                "bAutoWidth": false
                
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

       /* document.getElementById('getTax').value = document.getElementById("getQuantity").value * tab * document.getElementById("getTax%").value/100;;*/
        document.getElementById('getTotal').value = (document.getElementById("getQuantity").value * tab) + document.getElementById("getTax").value;;
        document.getElementById('getDue').value = document.getElementById("getTotal").value - document.getElementById("getAdvance").value;
    }





}



function getMeasurementType(id, type) {
    //fetch('https://localhost:7208/Home/GetMeasurementType')
    fetch('https://localhost:7238/Home/GetMeasurementType')

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
            /*     scrollY: '1000px',*/
            scrollX: true,
            scrollCollapse: true,
            /*paging: false,*/


            bLengthChange: true,
            "iDisplayLength": 5,
            bInfo: false,
            responsive: true,
            "bAutoWidth": false


        });
        $('#employeeList').on('click', 'tbody tr', function () {

            var info = table.row(this).data();


            document.getElementById('MeasurementType').value = info[0];
            document.getElementById("openClosebtn").click();



        })
    })
    }


    if (type == "select") {

        let tab = "";
        var m = 0;
        for (m = 0; m < sample.length; m++) {

            tab += `<option value="${sample[m]}">${sample[m]}</option>`
        }
        document.getElementById(id).innerHTML = tab;


    }


}








function getCustomer(id, type) {
    //fetch('https://localhost:7208/Home/GetCustomer')
    fetch('https://localhost:7238/Home/GetCustomer')

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
                /*     scrollY: '1000px',*/
                scrollX: true,
                scrollCollapse: true,
                /*paging: false,*/


                bLengthChange: true,
                "iDisplayLength": 10,
                bInfo: false,
                responsive: true,
                "bAutoWidth": false

            });
              $('#employeeList').on('click', 'tbody tr', function () {

                    var info = table.row(this).data();


                  location.replace("https://localhost:7238/Home/EditCustomer?param1=" + info[0] + "&param2=" + info[1] + "&param3=" + info[2] + "&param4=" + info[3] +  "&param5=" + info[4]);



                })
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
    fetch('https://localhost:7238/Home/GetCustomer')

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



function print() {
    /*let DataTable = let p = sessionStorage.getItem("DataTable");*/

    document.getElementById('inpt').value ="https://localhost:7238/Home/ViewOrders";
    document.getElementById("printSubmit").click();



}


function printEditOrders() {
    /*let DataTable = let p = sessionStorage.getItem("DataTable");*/

    
    document.getElementById("printSubmit").click();



}


function getCustomerIDByName(CustomerName,id,event){

    fetch('https://localhost:7238/Home/GetCustomerIDByName/?CustomerName='+CustomerName)

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
           // document.getElementById(id).innerHTML = "";
            document.getElementById(id).innerHTML += tab;
           event.stopPropagation();
           // alert('back');
        })
   
}



function getOrderNumberByID(CustomerID, id) {

    fetch('https://localhost:7238/Home/GetOrderNumberByID/?CustomerID=' + CustomerID)

        .then(response => response.json())
        .then(data => {
            sample = data;
            //Console.log(sample);

            let tab = "";
            var m = 0;
            for (m = 0; m < sample.length; m++) {

                tab += `<option value="${sample[m].OrderNum}">${sample[m].OrderNum}</option>`
            }
            // document.getElementById(id).innerHTML = "";

            document.getElementById(id).innerHTML = `<option value="" disabled selected hidden>Order Number</option>`;
            // document.getElementById(id).innerHTML = "";
            document.getElementById(id).innerHTML += tab;
          
            // alert('back');
        })

}







function AddMeasurementTypeHelper() {
    //console.log("new type" + document.getElementById("MeasurementType").innerHTML);
    var newType = document.getElementById("MeasurementType").value;
    
    fetch('https://localhost:7238/Home/AddMeasurementType/?MeasurementType=' + newType)
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
    var price = document.getElementById("Price").value;

    fetch('https://localhost:7238/Home/AddPattern/?Pattern=' + newType +'&Price='+ price)
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
   // var address = documnet.getelementbyid("8888")
    if (CustomerID == "" || CustomerName == "" || Phone == "" || Address == "") {
        modal('Unfilled fields', false)
    }
    else {
        fetch('https://localhost:7238/Home/AddCustomer/?CustomerID=' + CustomerID + '&CustomerName=' + CustomerName + '&Phone=' + Phone + '&Email=' + Email + '&Address=' + Address)
            .then(response => response.json())
            .then(data => {

                //if (data == 1) {

                //    console.log('ijfoierjf');

                //    modal('EmployeeID is required', false);
                //}
                /*  alert(data==3);*/

                if (data == 3) {
                    /* location.replace("https://localhost:7238/Home/Customers");*/
                    modal('CustomerID  already exists', false)
                    //if (confirm('An Employee with this EmployeeID already exists. Click OK to update Employee Information ')) { updateEmployeeData(EmployeeID, Name, Data) }
                    //modal('An Employee with this EmployeeID already exists. Click OK to update Employee Information ', true)

                }

                if (data == 0) {

                    modal('done',false);
                    location.replace("https://localhost:7238/Home/Customers");

                }
                else {


                }



            })
    }
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


    fetch('https://localhost:7238/Home/CheckMeasurementField/?CustomerID=' + CustomerID + '&MeasurementType=' + MeasurementType)

        .then(response => response.json())
        .then(data => {
            if (data == 1) {
               

                if (confirm('This measurement already exists. Do you want to update it?')) {
                    fetch('https://localhost:7238/Home/UpdateCustomerMeasurements/?CustomerID=' + CustomerID + '&MeasurementType=' + MeasurementType + '&Measurement=' + Measurement + '&Metric=' + Metric)

                        .then(response => { document.getElementById("searchbtn").click(); })
                    .then(data => {
                       // $('x').load(document.URL + ' x');
                       // document.getElementById("customerMeasurementDetailsBody").contentWindow.location.reload(true);
                        console.log('done'); 
                        document.getElementById("ModalButton").click();
                        getCustomerMeasurementDetails(event);

                        
                    })
                }
            }

            if (data == 0) {
                fetch('https://localhost:7238/Home/AddMeasurementField/?CustomerID=' + CustomerID + '&MeasurementType=' + MeasurementType + '&Measurement=' + Measurement + '&Metric=' + Metric)

                    .then(response => { document.getElementById("searchbtn").click(); })
                    .then(data => {

                        console.log('done');
                        getCustomerMeasurementDetails(event);
                    })
            }





            
        })
    console.log("daiked");

     
}


function getCustomerMeasurementDetails(event) {

    var CustomerID = document.getElementById("getCustomerID").value;
    event.preventDefault();
    fetch('https://localhost:7238/Home/GetCustomerMeasurementDetails/?CustomerID='+CustomerID)

        .then(response => response.json())
        .then(data => getCustomerMeasurementDetailsHelper(data))



}


function getCustomerMeasurementDetailsHelper(data) {
    getMeasurementType("MeasurementType", "select");
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

   // jQuery(document).ready(function ($) {
    $(document).ready(function () {
        $.noConflict();
         $('#employeeList').DataTable({
            /*     scrollY: '1000px',*/
            scrollX: true,
            scrollCollapse: true,
            /*paging: false,*/


            bLengthChange: true,
            "iDisplayLength": 10,
            bInfo: false,
            responsive: true,
            "bAutoWidth": false

            //processing: true,
            //serverSide: true,
            //ajax: '../server_side/scripts/server_processing.php'


        });
    })
    document.getElementById("ccc").style.display = "flex";

    document.getElementById("display_tableMK").style.display = "flex";
    
   



   // document.getElementById("MeasurementType").innerHTML+=




}


function loadRequiredFunctionsCreateOrder(){
    //getCustomer('getCustomerID', 'select');
    getCustomerName('getCustomerName');
   // CustomerName = document.getElementById("getCustomerName").value;
   //getCustomerIDByName(CustomerName, 'getCustomerID');
    getPattern("getPattern", "select");
    //fillAllFields();

}


function CreateOrderFuncHelper() {
/*    if (fillAllFields() == true) {
        alert('in');
    }*/


    if (fillAllFields() == true) {
        //alert('in');

        var CustomerID = document.getElementById("getCustomerID").value;
        var Pattern = document.getElementById("getPattern").value;
        var DueDate = document.getElementById("getDueDate").value;
        var Quantity = document.getElementById("getQuantity").value;
        var Total = document.getElementById("getTotal").value;
       /* var Advance = document.getElementById("getAdvance").value;*/
       /* var Due = document.getElementById("getDue").value*/
        var TaxPercent = document.getElementById("getTax%").value
        var Tax = document.getElementById("getTax").value;
        console.log(DueDate);
        console.log(CustomerID);
        fetch('https://localhost:7238/Home/CreateOrderFunc/?CustomerID=' + CustomerID + '&Pattern=' + Pattern + '&DueDate=' + DueDate + '&Quantity=' + Quantity + '&Total=' + Total + '&TaxPercent='+TaxPercent +'&Tax='+Tax)
            .then(response => response.json())
            .then(data => {
                alert('done');
                location.replace("https://localhost:7238/Home/ViewOrders");
            })
    }
    else if(fillAllFields()==false){
        alert('unfilled fields');
    }
/*    alert('hehl');
    let x = fillAllFields();
    console.log(x);*/
}











function AddPaymentFuncHelper() {
    /*    if (fillAllFields() == true) {
            alert('in');
        }*/
     
    var CustomerName = document.getElementById("getCustomerName").value;
    var CustomerID = document.getElementById("getCustomerID").value;
    var orderNum = document.getElementById("getOrderNum").value;
    var AmountPaid= document.getElementById("getPayment").value;
     
    if (CustomerName!="" & CustomerID!="" & orderNum!="" & AmountPaid!="") {
        
        /*alert('jcnjj');*/
        //console.log(CustomerID);
        fetch('https://localhost:7238/Home/AddPaymentFunc/?CustomerName=' + CustomerName + '&CustomerID=' + CustomerID + '&OrderNum=' + orderNum + '&AmountPaid=' + AmountPaid)
            .then(response => response.json())
            .then(data => {
                alert('done');
            })
    }
    else  {
       modal('unfilled fields', false);
    }
     
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


    /* document.getElementById('getTotal').value = document.getElementById("getQuantity").value * document.getElementById("getPrice").value;*/


    document.getElementById('getTax').value = document.getElementById('getQuantity').value * document.getElementById('getPrice').value * document.getElementById('getTax%').value * 0.01;
    var x = document.getElementById('getPrice').value * document.getElementById('getQuantity').value*(-1);
    document.getElementById('getTotal').value = document.getElementById('getTax').value - x;

   /* document.getElementById('getDue').value = document.getElementById("getTotal").value - document.getElementById("getAdvance").value;*/

}

 
function getPatternSalesHelper() {



    fetch('https://localhost:7238/Home/getPatternSalesGraph')

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
            /*rab.push(0);*/
            



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
            const barColors = ["teal","red","yellow","blue"];


            new Chart("myChart", {

                type: "pie",

                 
                data: {
                     
                    labels: xValues,

                   /* labels: {
                        render:xValues
                    },*/

                    datasets: [{
                      /*  maxBarThickness: 8,
                        barPercentage: 0.5,
                       
                        minBarLength: 2,*/
                        backgroundColor: barColors,
                        data: yValues,
                         datalabels: {
                             color: '#000000',
                             
                        }
                    }]
                },
                options: {
                    plugins: {
                        datalabels: {
                            formatter: function (value, context) {
                                return context.chart.data.labels[context.dataIndex];
                            }
                        }
                    },

                /*    plugins: {
                        // Change options for ALL labels of THIS CHART
                        datalabels: {
                            color: '#36A2EB'
                        }
                    },
*/


                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'white'
                        }
                    },
                    title: {
                        display: true,
                        text: "Pattern Sales",
                        fontColor: "white"


                    }

                }
            });
            //insert NumDeliveryDueHelper(); here
            NumDeliveryDueHelper()
        })
 

}




function NumDeliveryDueHelper() {
    fetch('https://localhost:7238/Home/NumDeliveryDue')

        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("NumDeliveryDue").innerHTML = data[0].COUNT;
            TotalAmountPaidHelper();

        })

}





function TotalAmountPaidHelper() {
    fetch('https://localhost:7238/Home/TotalAmountPaid')

        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("TotalAmountPaid").innerHTML ="Rs "+ data[0].COUNT;

            TotalSalesHelper();
        })

}






function TotalSalesHelper() {
    fetch('https://localhost:7238/Home/TotalSales')

        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("TotalSales").innerHTML = "Rs " + data[0].COUNT;

             NumPendingDeliveriesHelper();
        })

}




function NumPendingDeliveriesHelper() {
    fetch('https://localhost:7238/Home/NumPendingDeliveries')

        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("NumPendingDeliveries").innerHTML = data[0].COUNT;

            getMonthlySalesHelper();
        })

}
function getMonthlySalesHelper() {



    fetch('https://localhost:7238/Home/getMonthlySalesGraph')

        .then(response => response.json())
        .then(data => {
            let sample = data;
            let tab = [];
            let rab = [];
            var months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
             
            var m = 0;
            for (m = 0; m < sample.length; m++) {

                tab.push(months[`${sample[m].Pattern}`-1])
                rab.push(`${sample[m].COUNT}`)
                /*months.push(moment().month(`${sample[m].COUNT}`).format("MMMM"));*/
            }
            /*rab.push(0);*/




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
            /* const barColors = ["white", "black", "white", "black", "white", "black", "white", "black", "white", "black", "white", "black"];*/
            /*const barColors = ["teal", "teal", "teal", "teal", "teal", "teal", "teal", "teal", "teal", "teal", "teal", "teal",];
*/
            const barColors="blue"
            new Chart("myChart2", {

                type: "bar",


                data: {

                    labels: xValues,

                    /* labels: {
                         render:xValues
                     },*/

                    datasets: [{
                          maxBarThickness: 8,
                          barPercentage: 0.5,
                         
                          minBarLength: 2,
                        backgroundColor: barColors,
                        data: yValues,
                   /*     datalabels: {
                            color: '#000000',

                        }*/
                       
                    }]
                },
                options: {
                   /* plugins: {
                  */     /* datalabels: {
                            formatter: function (value, context) {
                                return context.chart.data.labels[context.dataIndex];
                            }
                        }
                    },
*/
                    /*    plugins: {
                            // Change options for ALL labels of THIS CHART
                            datalabels: {
                                color: '#36A2EB'
                            }
                        },
    */


                    legend: { display: false},
                    title: {
                        display: true,
                        text: "Monthly Sales",
                        fontColor:"white"


                    },


                     scales: {
                        yAxes: [{
                            ticks: {
                              /*  beginAtZero: true,*/
                                fontColor: 'white'
                            },
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: 'white'
                            },
                        }]
                    } 


                }
            });
            //insert NumDeliveryDueHelper(); here
       
        })


}



function getOrders() {

console.log("fhfhh")
    fetch('https://localhost:7238/Home/GetOrders')

        .then(response => response.json())
        .then(data => {

            
            sample = data;

            let tab = "";
            var m = 0;
            for (m = 0; m < sample.length; m++) {

                tab += `<tr>`+
                `<td>${sample[m].OrderNum}</td>`+
           `<td>${sample[m].CustomerID}</td>`+
            `<td>${sample[m].CustomerName}</td>`+
            `<td>${sample[m].Total}</td>`+
            `<td>${sample[m].DueDate.split(' ')[0]}</td>`+
             `<td>${sample[m].OrderStatus}</td>`+
            `</tr>`
             /*   let x = data[3];
                x = x.split(' ');
                let d = x[0];
                GivenDate = new Date(d);*/
            }

            document.getElementById("orderBody").innerHTML = tab;
           // sessionStorage.setItem("DataTable", tab);


            //just added
           /* var dataSet;
            try {
                dataSet = JSON.parse(localStorage.getItem('dataSet')) || [];
            } catch (err) {
                dataSet = [];
            }*/
            //just added end



            $(document).ready(function () {
                $.noConflict();
                var table = $('#employeeList').DataTable({
                  /*  scrollY: '1000px',
                    scrollX: true,*/
                    scrollCollapse: true,
                   /* paging: false,
*/

                    bLengthChange: true,
                    "iDisplayLength": 10,
                    bInfo: false,
                    responsive: true,
                    "bAutoWidth": false

                });
              /*  sessionStorage.setItem("x", table);
                sessionStorage.setItem("y","ta");
*/

                //just added
                //Loop through dataSet to add _all_ of the rows.
                /*for (var i = 0; i < dataSet.length; i++) {
                    table.row.add(dataSet[i]).draw();
                }*/
                //just added end




                $('#employeeList').on('click', 'tbody tr', function () {

                    var info = table.row(this).data();


                    location.replace("https://localhost:7238/Home/EditOrders?param1=" + info[5] + "&param2=" + info[0] + "&param3=" + info[1] +
                    "&param4="+info[2] + "&param5="+info[3]+"&param6="+info[4]);



                })


               /* $('#employeeList').on('dblclick', '#orderBody tr', function () {

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
                     <td>${x.CustomerName}</td>
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
*/

            });

        });
 
}

function getClosedOrders() {

    console.log("fhfhh")
    fetch('https://localhost:7238/Home/GetClosedOrders')

        .then(response => response.json())
        .then(data => {


            sample = data;

            let tab = "";
            var m = 0;
            for (m = 0; m < sample.length; m++) {
                if (sample[m].OrderStatus != 'Delivered') {
                    tab += `<tr>
           <td>${sample[m].OrderNum}</td>
           <td>${sample[m].Total}</td>
            <td>${sample[m].Received}</td> 
            <td>${sample[m].DueDate}</td>
            <td>Incomplete</td>
            <td></td>
            </tr>`}
                if (sample[m].OrderStatus == 'Delivered') {
                    tab += `<tr>
           <td>${sample[m].OrderNum}</td>
           <td>${sample[m].Total}</td>
            <td>${sample[m].Received}</td> 
            <td>${sample[m].DueDate}</td>
            <td>Complete</td>
            <td></td>
            </tr>`}
                console.log(sample[m].DeliveryStatus);
            }
            document.getElementById("ClosedOrderBody").innerHTML = tab;


            $(document).ready(function () { 
                $.noConflict();

                var table = $('#employeeList').DataTable({
                    /*     scrollY: '1000px',*/
                    scrollX: true,
                    scrollCollapse: true,
                    /*paging: false,*/


                    bLengthChange: true,
                    "iDisplayLength": 10,
                    bInfo: false,
                    responsive: true,
                    "bAutoWidth": false,


                    rowCallback: function (row, data, index) {
                       /* if (data[2] >= data[1]) {
                            $(row).find('td:eq(3)').css('color', 'red');
                        }*/
                        let x = data[3];
                        x = x.split(' ');
                        let d = x[0];
                        GivenDate = new Date(d);
                        Today = new Date();
                        //data nums are not ints
                        let data1 = Number(data[1]);
                        let data2 = Number(data[2]);
                       /* alert(data[5]=="");*/
                         /*alert(data1<data2)
                         
                         
 */
                        if (data2 >= data1 & GivenDate < Today & data[4] == "Incomplete") {
                            /* $(row).css('background-color', 'red');*/
                            $(row).find('td:eq(5)').css('background-color', 'red');

                            $(row).find('td:eq(5)').html("Payment:Done<br/>Due Date:Passed<br/>DeliveryStatus:Incomplete ");


                        }
                        else if (data2 >= data1 & GivenDate > Today & data[4] == "Incomplete") {
                            /* $(row).css('background-color', 'green');*/
                            $(row).find('td:eq(5)').css('background-color', 'green');
                            $(row).find('td:eq(5)').html("Payment:Done<br/>Due Date:Not Passed<br/>DeliveryStatus:Incomplete ");

                        }

                        else if (data2 < data1 & Today > GivenDate & data[4] == "Complete") {
                            /*$(row).css('background-color', 'red');*/
                            $(row).find('td:eq(5)').css('background-color', 'red');
                            $(row).find('td:eq(5)').html("Payment:Not Done<br/>Due Date:Passed<br/>DeliveryStatus:Complete ");


                        }

                        else if (data2 < data1 & Today < GivenDate & data[4] == "Complete") {
                            /*                            $(row).css('background-color', 'green');*/
                            $(row).find('td:eq(5)').css('background-color', 'green');
                            $(row).find('td:eq(5)').html("Payment:Not Done<br/>Due Date:Not Passed<br/>DeliveryStatus:Complete ");

                        }

                        else if (data2 < data1 & Today > GivenDate & data[4] == "Incomplete") {
                            /*$(row).css('background-color', 'yellow');*/
                            $(row).find('td:eq(5)').css('background-color', 'yellow');
                            /* $(row).css('color', 'black');*/

                            $(row).find('td:eq(5)').html("Payment:Not Done<br/>Due Date:Passed<br/>DeliveryStatus:Incomplete ");

                        }

                        else if (data2 < data1 & Today < GivenDate & data[4] == "Incomplete") {
                            /*                            $(row).css('background-color', 'green');*/
                            $(row).find('td:eq(5)').css('background-color', 'green');
                            $(row).find('td:eq(5)').html("Payment:Not Done<br/>Due Date:Not Passed<br/>DeliveryStatus:Incomplete ");

                        }

                        else {
                            $(row).find('td:eq(5)').css('background-color', 'lightgreen');
                            $(row).find('td:eq(5)').html("Order Complete ");

                        }

                       /* if (data[2] >= data[1] & GivenDate < Today & data[4] == "Incomplete") {
                           // alert(data[4]=="Incomplete")
                            $(row).css('background-color', 'red');
                        }
                        if (data[2] >= data[1] & GivenDate > Today ) {
                            $(row).css('background-color', 'green');
                        }

                        if (data[2] <= data[1] & Today > GivenDate) {
                            $(row).css('background-color', 'red');
                        }

                        if (data[2] <= data[1] & Today < GivenDate ) {
                            $(row).css('background-color', 'green');
                        }

                        if (data[2] <= data[1] & Today > GivenDate ) {
                            $(row).css('background-color', 'yellow');
                        }
*/
                       
                    }







                });

                $('#employeeList').on('click', 'tbody tr', function () {

                    var info = table.row(this).data();


                    location.replace("https://localhost:7238/Home/EditClosedOrders?param1=" + info[4] + "&param2=" + info[0]);



                })

               
        
            });

          /*  $("#employeeListc td").on("click", function () {
               //var info = table.row(this).data();
                
                $(this).editable();
                alert(this);

                })*/
           /* var myTable = $('#employeeListc').DataTable();
            $('#myTable').on('click', 'tbody td.editable', function (e) {
                editor.inline(this);
            });*/



          



        });

}






function EditClosedOrdersHelper() {

    var q = window.location.search;
    var params = new URLSearchParams(q);
    const DeliveryStatus1 = params.get('param1');
    const orderNum = params.get('param2');
 /*   fetch('https://localhost:7238/Home/EditClosedOrders/?DeliveryStatus=' + DeliveryStatus)

        .then(response => response.json())
        .then(data => {

            alert('step1 done');
        })*/


    document.getElementById("DeliveryStatus").value = DeliveryStatus1; 
 //   document.getElementById("orderNum").innerHTML = "Order Number "+ orderNum; 
    document.getElementById("orderNum").innerHTML = "<h4>Order Number "+orderNum+"</h4>"; 


}


function EditOrdersHelper() {

    var q = window.location.search;
    var params = new URLSearchParams(q);
    const OrderStatus = params.get('param1');
    const orderNum = params.get('param2');
    const CustomerID = params.get('param3');
    const CustomerName = params.get('param4');
    const AmountDue = params.get('param5');
    const DeliveryDate = params.get('param6');
 

    document.getElementById("CustomerID").value = CustomerID;
    document.getElementById("CustomerName").value = CustomerName;
    document.getElementById("AmountDue").value = AmountDue;
    document.getElementById("DeliveryDate").value = DeliveryDate;

/*    document.getElementById("OrderStatus").value = OrderStatus;*/
 /*   document.querySelector('.radio:checked').value = OrderStatus;*/
    $(":checkbox[value='"+OrderStatus+"']").prop("checked", "true");
    //   document.getElementById("orderNum").innerHTML = "Order Number "+ orderNum; 
    document.getElementById("orderNum").innerHTML = "<h4>Order Number " + orderNum + "</h4>";
    document.getElementById("CustomerID").innerHTML = "<label>CustomerID: " + CustomerID + "</label>";
   // document.getElementById("CustomerID").value = CustomerID;
    document.getElementById("CustomerName").innerHTML = "<label>Name: " + CustomerName + "</label>";
    document.getElementById("AmountDue").innerHTML = "<label>Amount Due: " + AmountDue + "</label>";
    document.getElementById("DeliveryDate").innerHTML = "<label>Delivery Date: " + DeliveryDate + "</label>";

 
    h(orderNum)


}

function h(orderNum) {

    fetch('https://localhost:7238/Home/GetOrders')

        .then(response => response.json())
        .then(data => {


            sample = data;


            var m;
            for (k = 0; k < sample.length; k++) {
                if (sample[k].OrderNum == orderNum) {
                    m = k
                    break;
                }

            }


            document.getElementById("Pattern").value =   sample[m].Pattern  ;
            document.getElementById("Price").value = sample[m].Price  ;
            document.getElementById("Quantity").value = sample[m].Quantity;
            document.getElementById("Cost").value =  sample[m].Price * sample[m].Quantity;
            document.getElementById("TaxPercent").value =  sample[m].TaxPercent;
            document.getElementById("Tax").value =  sample[m].Tax;


         /*   document.getElementById("Pattern").innerHTML = "<label>Pattern: " + sample[m].Pattern + "</label>";
            document.getElementById("Price").innerHTML = "<label>Price: " + sample[m].Price + "</label>";
            document.getElementById("Quantity").innerHTML = "<label>Quantity: " + sample[m].Quantity + "</label>";
            document.getElementById("Cost").innerHTML = "<label>Cost: " + sample[m].Price * sample[m].Quantity + "</label>";
            document.getElementById("TaxPercent").innerHTML = "<label>Tax%: " + sample[m].TaxPercent + "%</label>";
            document.getElementById("Tax").innerHTML = "<label>Tax: " + sample[m].Tax + "</label>";
*/

            let tab = "";
           /* var m = x;*/
           /* var x = sample[m];
*/


            date = new Date();

            tab +=`<style> 
        table {
           /* margin:2%;
            width:0%;
           */
           width:30%;
           margin-top:2%;


            margin-left: auto;
            margin-right: auto;
        }
/*table, th, td */
.bordertable th,.bordertable td{
  border: 1px solid black;
  border-collapse: collapse;
    padding: 15px;
    text-align:left;
}


/*th, td {
  padding: 15px;
}
*/
</style>


            <form style="border:1px solid black; margin:5%;">

         <img src="/images/logo.jpg" alt="" style="max-width:100px;max-height:100px"/>
       <img src="https://us.123rf.com/450wm/doublerdesign/doublerdesign2109/doublerdesign210900137/174246874-sewing-machine-logo-design-template-for-tailor-shop.jpg?ver=6" alt="logo" style="max-width:100px;max-height:100px" />

         <div style="text-align:center">

 <h1>Nisha Tailors <i>Since 1963</i></h1>
 <h4>Address: SB road, Pune | Email: tailors@gmail.com | Tel No.: 09090900889 </h4>
</div>



        <h4 style="text-align:center;"><b>Receipt</b> </h4>
         <h4 >
          <p style="text-align:right">Date :${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}</p>
         <p style="text-align:left">Order Number : ${sample[m].OrderNum} </p>
         
       </h4>
        
        <table style="margin-left:0%;text-align:left;">
 
         
                     <tr>
                    <th>Name</th>
                    <td>${sample[m].CustomerName}</td>
                </tr>
                     <tr>
                    <th>Phone</th>
                    <td>${sample[m].Phone}</td>
                </tr>
                <tr>
                <th>Shipping Address</th>
                <td>${sample[m].Address}</td>
                </tr>
                 <tr>
                <th>Delivery Date</th>
                <td>${sample[m].DueDate.split(' ')[0]}</td>
                 </tr>

                
                </table>
         
        </br>
        <div style="text-align:center"><b >Order Details</b></div>
        <table class="bordertable" style="width:100%">

            <tr>
                <th>Pattern</th>
                 
                <th>Price</th>
                <th>Quantity</th>

      
            </tr>
            <tr>
            <td>${sample[m].Pattern}</td>
             <td>${sample[m].Price}</td>
            <td>${sample[m].Quantity}</td>
        
          

            </tr>


        </table>

        


         <table style="margin-right:0%; text-align:left;">

                   <tr>
                    <th>Cost</th>
                    <td>${sample[m].Quantity * sample[m].Price}</td>
                </tr>
                <tr>
                    <th>Tax%</th>
                    <td>${sample[m].TaxPercent}%</td>
                </tr>
                </tr>
                <tr>
                    <th> Tax </th>
                    <td>${sample[m].Tax} </td>
                </tr>


                <tr>
                <th>Total</th>
                <td>${sample[m].Total}</td>
                </tr>

                

        </table>

        <div style="text-align:center"><i>Thank you for visiting Nisha Tailors</i></div>
    </form>`


/*


     </table >
                <table>


                    <tr>
                        <th>Tel No.</th>
                        <td>1345678</td>
                    </tr>
                    <tr>
                        <th> Address </th>
                        <td>jhbwfgdggggggggggggggggggggg</td>
                    </tr>

                    <tr>
                        <th>Email</th>
                        <td>tailors@gmail.com</td>
                    </tr>




                </table>
*/


          /*  tab += `<table>`+ 
                `<tr>${sample[m].OrderNum}</tr>` +
                `<tr>${sample[m].CustomerID}</tr>` +
                `<tr>${sample[m].CustomerName}</tr>` +
                `<tr>${sample[m].AmountDue}</tr>` +
                `<tr>${sample[m].DueDate.split(' ')[0]}</tr>` +
                `<tr>${sample[m].OrderStatus}</tr>` +
                `<tr>
                     <td>${x.Pattern}</td>
                     <td>${x.Quantity}</td>
                     <td>${x.Total}</td>
                     <td>${x.Advance}</td>
                     <td>${x.AmountDue}</td>
                     <td>${x.DueDate}</td>
                    </tr>`+
                `</table>`
            
*/


            document.getElementById("TxtHtmlCode").value = tab;
        })

}


function EditCustomerHelper() {

    var q = window.location.search;
    var params = new URLSearchParams(q);
    const CustomerID = params.get('param1');
    const Name = params.get('param2');
    const Phone = params.get('param3');
    const Email = params.get('param4');
    const Address = params.get('param5');
    /*   fetch('https://localhost:7238/Home/EditClosedOrders/?DeliveryStatus=' + DeliveryStatus)
   
           .then(response => response.json())
           .then(data => {
   
               alert('step1 done');
           })*/


    document.getElementById("CustomerName").value = Name;
    document.getElementById("Phone").value = Phone;
    document.getElementById("Email").value = Email;
    document.getElementById("Address").value = Address;
    //   document.getElementById("orderNum").innerHTML = "Order Number "+ orderNum; 
    document.getElementById("CustomerID").innerHTML = "<h4>Customer ID: " + CustomerID+ "</h4>";


}




function updateDeliveryStatus() {
    var DeliveryStatus = document.getElementById("DeliveryStatus").value;
    var q = window.location.search;
    var params = new URLSearchParams(q);
    
    const orderNum = params.get('param2');

       fetch('https://localhost:7238/Home/UpdateDeliveryStatus/?DeliveryStatus=' + DeliveryStatus + '&orderNum='+ orderNum)

       .then(response => response.json())
       .then(data => {

           alert('step1 done');
       })

}


function updateOrderStatus(event) {
    event.preventDefault();
   // var OrderStatus = document.getElementById("OrderStatus").value;
    var OrderStatus = document.querySelector('.radio:checked').value;

    var q = window.location.search;
    var params = new URLSearchParams(q);

    const orderNum = params.get('param2');

    fetch('https://localhost:7238/Home/UpdateOrderStatus/?OrderStatus=' + OrderStatus + '&orderNum=' + orderNum)

        .then(response => response.json())
        .then(data => {
            if (data == 0) {
                alert('done');
            }
            if (data == 3) {
                alert('error');
            }
             
        })

}

















function stopper(event) {
    alert('stopped propagating');
   // event.preventDefault();
    event.stopPropagation();
}

function fillAllFields() {

    let Name = document.getElementById("getCustomerName").value;
    //console.log(button);
    let id = document.getElementById("getCustomerID").value;
    let pattern = document.getElementById("getPattern").value;
    let qty = document.getElementById("getQuantity").value;
    let dueDate = document.getElementById("getDueDate").value;

    let button2 = document.getElementById("CreateOrder");
    if (Name == "" || id=="" || pattern == "" || qty == "" || dueDate == "") {

       // button2.disabled = true;
        return false;
    }
    else {
      //  button2.disabled = false;
        return true;
    }
}






function getPaymentDetails(id, type) {
    //fetch('https://localhost:7208/Home/g')
    fetch('https://localhost:7238/Home/getPaymentDetails')

        .then(response => response.json())
        .then(data => getPaymentDetailsHelper(data, id, type))

}

function getPaymentDetailsHelper(data, id, type) {
    sample = data;
    if (type == "datatable") {

        let tab = "";
        var m = 0;
        for (m = 0; m < sample.length; m++) {

            tab += `<tr>
             <td>${sample[m].ReceiptNum}</td>
           <td>${sample[m].CustomerName}</td>
            <td>${sample[m].CustomerID}</td>
            <td>${sample[m].OrderNum}</td>
            <td>${sample[m].AmountPaid}</td>
            <td>${sample[m].DatePaid.split(' ')[0]}</td>
 
            </tr>`
        }
        document.getElementById(id).innerHTML = tab;
        $(document).ready(function () {
            $.noConflict();
            var table = $('#employeeList').DataTable({
                /*     scrollY: '1000px',*/
                scrollX: true,
                scrollCollapse: true,
                /*paging: false,*/


                bLengthChange: true,
                "iDisplayLength": 10,
                bInfo: false,
                responsive: true,
                "bAutoWidth": false

                //processing: true,
                //serverSide: true,
                //ajax: '../server_side/scripts/server_processing.php'


            });
        })
    }

   /* if (type == "select") {

        let tab = "";
        var m = 0;
        for (m = 0; m < sample.length; m++) {

            tab += `<option value="${sample[m].Pattern}">${sample[m].Pattern}</option>`
        }
        document.getElementById(id).innerHTML += tab;


    }*/

    //write an onclick func for this
    /*if (type == "price") {

        var PatternType = document.getElementById("getPattern").value;

        let tab = "";
        var m = 0;
        for (m = 0; m < sample.length; m++) {
            if (sample[m].Pattern == PatternType) {
                tab += sample[m].Price

            }

            //tab += `<option value="${sample[m].Pattern}">${sample[m].Pattern}</option>`
        }

        document.getElementById(id).value = tab;
        document.getElementById('getTotal').value = document.getElementById("getQuantity").value * tab;
        document.getElementById('getDue').value = document.getElementById("getTotal").value - document.getElementById("getAdvance").value;
    }
*/




}




// the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function () {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    if ($box.is(":checked")) {
        // the name of the box is retrieved using the .attr() method
        // as it is assumed and expected to be immutable
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        // the checked state of the group/box on the other hand will change
        // and the current value is retrieved using .prop() method
        $(group).prop("checked", false);
        $box.prop("checked", true);
    } else {
        $box.prop("checked", false);
    }
});