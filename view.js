window.addEventListener("load",function()
{
    var tableBody= document.getElementById("tablebody")
    var data=JSON.parse(sessionStorage.getItem('formData'))||[];
    data.forEach(function(record){
        var row=document.createElement('tr')
        row.innerHTML= `
        <td>${record.fname}</td>
        <td>${record.lname}</td>
        <td>${record.email}</td>
        <td>${record.gender}</td>
        <td>${record.bday}</td>
        <td>${record.contry}</td>

        `
        tableBody.appendChild(row);
        
        
    })
    
})