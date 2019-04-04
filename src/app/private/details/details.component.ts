import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdateService } from 'src/app/Service/update.service';
import { GetApiService } from 'src/app/Service/get-api.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  Form: FormGroup;
  userId: any;
  data: any;

  constructor(private fb: FormBuilder,private updateService: UpdateService, private getUser: GetApiService) { }

  ngOnInit() {


    this.Form = this.fb.group({
      firstName:[''],
      lastName: [''],
      fullName:['',Validators.required],
      username: ['',[Validators.required,Validators.email]],
      phoneNo: ['',Validators.required],

      address: ['',Validators.required],
      brief: [''],
      password: ['',[Validators.required,Validators.minLength(6)]]
      
    });

    this.userId = localStorage.getItem('data'); 
// console.log(this.userId); 
this.getUser.getById(this.userId).subscribe(response => { 
// var parsedData = JSON.parse(JSON.stringify(response));
this.data=response;
console.log(this.data);

this.Form.get('firstName').setValue(this.data.firstName);  
this.Form.get('lastName').setValue(this.data.lastName); 
// this.Form.get('fullName').setValue(this.data.firstName+" "+this.data.lastName); 
this.Form.get('fullName').setValue(localStorage.getItem('name')); 

this.Form.get('username').setValue(this.data.username); 
this.Form.get('address').setValue(this.data.address); 
this.Form.get('phoneNo').setValue(this.data.phoneNo); 
this.Form.get('brief').setValue(this.data.brief);
this.Form.get('password').setValue(this.data.password); 
// this.Form.get('confirmPassword').setValue(data[0].confirmPassword); 
});

// var fullname = this.Form.get('fullName').value.split(" "); 
// console.log(fullname[1]);console.log(fullname[2]);

  }

  update(){
    if(this.Form.valid)
    {

     
      var fullname = this.Form.get('fullName').value.split(" "); 

      console.log(fullname[0]);console.log(fullname[1]);

      this.Form.get('firstName').setValue(fullname[0]);
      
      this.Form.get('lastName').setValue(fullname[1]);
      
      this.updateService.updateData(localStorage.getItem('data'),this.Form.value).subscribe(response => {
        console.log("Put request successful");
        console.log(response);

        

        localStorage.removeItem('name');
        // console.log(Object.keys(response));
        // var str = this.Form.get('fullName').value;
        // var str1 = str.split(" ");
          
        // this.firstName = this.Form.get('fullName').value
        localStorage.setItem('name',this.Form.get('fullName').value);
        window.location.reload();

        // var str1 = response[0].split(" ");
        // this.Form.get('firstName').setValue(str1[0]); 
        // this.Form.get('lastName').setValue(str1[1]); 

      });
  }
}
}
