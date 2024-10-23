//import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';

//bootstrapApplication(AppComponent, appConfig)
  //.catch((err) => console.error(err));

  //console.log("Hello");
  //console.log("Hello, World!")

  function myFunction(param: number | string) {
	if (typeof(param) == "number" || typeof(param) == "string") {
	let result = (param as any) + 100;
	console.log("My result: " + result);
	} else {
	throw ("Expected a number or a string: " + param)
	}
   }
   myFunction(1);
   myFunction("London");

   let condition: boolean = true;
   let person: string = "Bob";
   const age: number = 40;

   let place;
   console.log("Place value: " + place + " Type: " + typeof(place));
   place = "London";
   console.log("Place value: " + place + " Type: " + typeof(place));