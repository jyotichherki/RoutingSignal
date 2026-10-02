import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';
import { Events } from './events/events';
import { Counter } from './counter/counter';
import { Get } from './get/get';
import { Style } from './style/style';
import { Ifelse } from './ifelse/ifelse';
import { Loop } from './loop/loop';
import { Signals } from './signals/signals';
import { Effects } from './effects/effects';
import { Pipes } from './pipes/pipes';
import { PipeShortNamePipe } from './pipe/pipe-short-name-pipe';
import { ConvertPipe } from './pipe/convert-pipe';
import { CommonModule } from '@angular/common';
import { Binding } from './binding/binding';
import { Todo } from './todo/todo';
import { Child } from './child/child';
// import { CounterStore } from './core/store/counter';
import { UserStore } from './core/store/counter';
import { Formsstore } from './formsstore/formsstore';
import { Reusable } from './reusable/reusable';
import { Button } from './button/button';
import { FormField } from '@angular/forms/signals';
import { HeaderComponent } from './header-component/header-component';




@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})


export class App {
    // name = "angular tutorial";
    // isAdmin = true
    // title = signal("jyoti i am very happy")

    // getUser(){
    //   return "jyoti"
    // }

    // count = 0;
    // handleClick(){
    //   console.log("button clicked");
    //   this.helloWorld()
    // }
    // helloWorld(){
    //   console.log("hello world");
      
    // }

    // handleclick(){
    //   let value;
    //   value = "jyoti"
    //   value = 10
    //   console.log(value);
      
    // }

    // handleclick(){
    //   console.log('button clicked!');
      
    // }
    // onTyping(event:any){
    //   console.log("typed",event.target.value);
      
    // }
    // onKeyUp(event:any){
    //   console.log("key up event",event.key);
      
    // }
    // onHover(event:any){
    //   console.log("hover event");
    // }


    // fullName = "dinesh chherki"
    // usd = 10;
    // usdToInr = 85;
    // username:string = 'jyoti'
    // message : string = ''
    // onMessage(msg: string){
    //   this.message = msg
    // }
    // constructor(public counterStore: CounterStore){

    // }

    // constructor(public userStore: UserStore){

    // }
    // saveData(){
    //   console.log("data fetch");
      
    // }

    // message = "";
    // onSave(msg:string){
    //   console.log(msg);
    //   this.message = msg
      
    // }



}
