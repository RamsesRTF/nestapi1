
export class CreateUserDTO {
  name:string;
  gmail:string;
  password:string;
  
  
  AboutMe:string;
  
  LikW:string;
  
  Education:string;
  
  Contact:{
    phone:number,
    email:string,
    location:string,
    socials:[String]
  };
  
  Skills:[String];
  Professions:[String];
  Languages:[String];
  
  Representative:{
    name:string,
    phone:number,
    email:string
  };
}

