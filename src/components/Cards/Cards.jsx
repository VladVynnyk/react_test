import React from 'react';
import classes from './Cards.module.scss';
import Button from "../UI/Button/Button";
import photo from "./photo-cover.svg";
import Card from "../UI/Cards/Card";
class Cards extends React.Component{
   state = {
      innerWidth:window.innerWidth,
       /*names:['Salvador Stewart Flynn Thomas Salva...', 'Takamaru Ayako Jurrien', "Ilya", "Alexandre", "Winny", "Simon"],
       emails:["JeromeKlarkaJeromeKlarka19233623...", "Takamuru@gmail.com", "Ilya_founder@gmail.com", "Alexandr_develop@gmail.com", "Winny_develop@gmail.com", "Simon@gmail.com"],
       descriptions:["Leading specialist of the department a...", "Lead independent Director", "Co-Founder and CEO", "Lead Independent Director", "Former Senior Director", "President of Commerce"],
       phones:["+38 (098) 278 76 24", "+38 (098) 278 90 24", "+38 (098) 235 44 24", "+38 (098) 178 44 24", "+38 (098) 278 22 88", "+38 (098) 278 44 00"]*/
   };
       firstNames = ['Salvador Stewart Flynn Thomas Salva...', 'Takamaru Ayako Jurrien', "Ilya", "Alexandre", "Winny", "Simon"]
       firstEmails = ["JeromeKlarkaJeromeKlarka19233623...", "Takamuru@gmail.com", "Ilya_founder@gmail.com", "Alexandr_develop@gmail.com", "Winny_develop@gmail.com", "Simon@gmail.com"]
       firstDescriptions = ["Leading specialist of the department a...", "Lead independent Director", "Co-Founder and CEO", "Lead Independent Director", "Former Senior Director", "President of Commerce"]
       firstPhones = ["+38 (098) 278 76 24", "+38 (098) 278 90 24", "+38 (098) 235 44 24", "+38 (098) 178 44 24", "+38 (098) 278 22 88", "+38 (098) 278 44 00"]
   secondState = {
       names:['Salvador Stewart Flynn Thomas Salva...', 'Takamaru Ayako Jurrien', "Ilya", "Alexandre", "Winny", "Simon"],
       emails:["JeromeKlarkaJeromeKlarka1923362362...", "Takamuru@gmail.com", "Ilya_founder@gmail.com", "Alexandr_develop@gmail.com", "Winny_develop@gmail.com", "Simon@gmail.com"],
       descriptions:["Leading specialist of the department of c...", "Lead independent Director", "Co-Founder and CEO", "Lead Independent Director", "Former Senior Director", "President of Commerce"],
       phones:["+38 (098) 278 76 24", "+38 (098) 278 90 24", "+38 (098) 235 44 24", "+38 (098) 198 44 24", "+38 (098) 278 22 88", "+38 (098) 278 44 00"]
   }
       secondNames = ['Salvador Stewart Flynn Thomas Salva...', 'Takamaru Ayako Jurrien', "Ilya", "Alexandre", "Winny", "Simon"]
       secondEmails = ["JeromeKlarkaJeromeKlarka1923362362...", "Takamuru@gmail.com", "Ilya_founder@gmail.com", "Alexandr_develop@gmail.com", "Winny_develop@gmail.com", "Simon@gmail.com"]
       secondDescriptions = ["Leading specialist of the department of c...", "Lead independent Director", "Co-Founder and CEO", "Lead Independent Director", "Former Senior Director", "President of Commerce"]
       secondPhones = ["+38 (098) 278 76 24", "+38 (098) 278 90 24", "+38 (098) 235 44 24", "+38 (098) 198 44 24", "+38 (098) 278 22 88", "+38 (098) 278 44 00"]
   thirdState = {
        names:["Salvador Stewart Flynn Thomas...", "Takamaru Ayako Jurrien", "Ilya", "Alexandre", "Winny", "Simon"],
        descriptions:["Frontend Developer Frontend ...", "Lead Independent Director", "Co-Founder and CEO", "Lead Independent Director", "Former Senior Director", "President of Commerce"],
        emails:["frontend_develop@gmail.com", "Takamuru@gmail.com", "Ilya_founder@gmail.com", "Alexandr_develop@gmail.com", "Winny_develop@gmail.com", "Simon@gmail.com"],
        phones:["+38 (098) 278 44 24", "+38 (098) 278 90 24", "+38 (098) 235 44 24", "+38 (098) 198 44 24", "+38 (098) 278 22 88", "+38 (098) 278 44 00"]
   }
        thirdNames=["Salvador Stewart Flynn Thomas...", "Takamaru Ayako Jurrien", "Ilya", "Alexandre", "Winny", "Simon"]
        thirdDescriptions=["Frontend Developer Frontend ...", "Lead Independent Director", "Co-Founder and CEO", "Lead Independent Director", "Former Senior Director", "President of Commerce"]
        thirdEmails=["frontend_develop@gmail.com", "Takamuru@gmail.com", "Ilya_founder@gmail.com", "Alexandr_develop@gmail.com", "Winny_develop@gmail.com", "Simon@gmail.com"]
        thirdPhones=["+38 (098) 278 44 24", "+38 (098) 278 90 24", "+38 (098) 235 44 24", "+38 (098) 198 44 24", "+38 (098) 278 22 88", "+38 (098) 278 44 00"]
   fourthState = {
        names:['Salvador Stewart Flynn Thomas Salva Salve...', 'Takamaru Ayako Jurrien', 'Ilya', "Alexandre", "Winny", "Simon"],
        emails:["frontend_develop@gmail.com", "Takamuru@gmail.com", "Ilya_founder@gmail.com", "Alexandr_develop@gmail.com", "Winny_develop@gmail.com", "Simon@gmail.com"],
        descriptions:["Leading specialist of the department of cent...", "Lead Independent Director", "Co-Founder and CEO", "Lead Independent Director", "Former Senior Director", "President of Commerce"],
        phones:["+38 (098) 278 44 24", "+38 (098) 278 90 24", "+38 (098) 235 44 24", "+38 (098) 198 44 24", "+38 (098) 278 22 88", "+38 (098) 278 44 00"]
   }

        fourthNames = ['Salvador Stewart Flynn Thomas Salva Salve...', 'Takamaru Ayako Jurrien', 'Ilya', "Alexandre", "Winny", "Simon"]
        fourthEmails = ["frontend_develop@gmail.com", "Takamuru@gmail.com", "Ilya_founder@gmail.com", "Alexandr_develop@gmail.com", "Winny_develop@gmail.com", "Simon@gmail.com"]
        fourthDescriptions = ["Leading specialist of the department of cent...", "Lead Independent Director", "Co-Founder and CEO", "Lead Independent Director", "Former Senior Director", "President of Commerce"]
        fourthPhones = ["+38 (098) 278 44 24", "+38 (098) 278 90 24", "+38 (098) 235 44 24", "+38 (098) 198 44 24", "+38 (098) 278 22 88", "+38 (098) 278 44 00"]

   componentDidMount() {
       window.addEventListener("resize", this.resize.bind(this))
       this.resize();
   }
   resize(){
       this.setState({innerWidth: window.innerWidth})
   }
   componentWillUnmount() {
       window.removeEventListener("resize", this.resize.bind(this));
   }
   showData(innerWidth){
           if(innerWidth>=360){
            this.firstNames.forEach((name, index)=>{
                const description = this.firstDescriptions[index];
                const email = this.firstEmails[index];
                const phone = this.firstPhones[index];
                <Card photo={photo} name={name} email={email} description={description} phoneNumber={phone}/>});
           }
           else if(innerWidth>=768) {
               this.secondNames.forEach((name, index)=>{
                const description = this.secondDescriptions[index];
                const email = this.secondEmails[index];
                const phone = this.secondPhones[index];
                <Card photo={photo} name={name} email={email} description={description} phoneNumber={phone}/>
            });
           }
           else if(innerWidth>=1024){
               this.thirdNames.forEach((name, index)=>{
                   const description = this.thirdDescriptions[index];
                   const email = this.thirdEmails[index];
                   const phone = this.thirdPhones[index];
                   <Card photo={photo} name={name} email={email} description={description} phoneNumber={phone}/>
               });
           }
            else if(innerWidth>=2550){
            this.fourthNames.forEach((name, index)=>{
                const description = this.fourthDescriptions[index];
                const email = this.fourthEmails[index];
                const phone = this.fourthPhones[index];
                <Card photo={photo} name={name} email={email} description={description} phoneNumber={phone}/>
            })}
       }

    render(){
        const data = {}
        return (
            <div className={classes.container}>
                <div className={classes.title}>Working with GET request</div>
                <div className={classes.cardsContainer}>
                    <div className={classes.cards}>
                        <Card className={classes.card} photo={photo} name={"Salvador Stewart Flynn Thomas..."} description={"Frontend Developer Frontend ..."} email={"frontend_develop@gmail.com"} phoneNumber={"+38 (098) 278 44 24"}></Card>
                        <Card className={classes.card} photo={photo} name={"Takamaru Ayako Jurrien"} description={"Lead Independent Director"} email={"Takamuru@gmail.com"} phoneNumber={"+38 (098) 278 90 24"}></Card>
                        <Card className={classes.card} photo={photo} name={"Ilya"} description={"Co-Founder and CEO"} email={"frontend_develop@gmail.com"} phoneNumber={"+38 (098) 278 44 24"}></Card>
                        <Card className={classes.card} photo={photo} name={"Alexandre"} description={"Lead Independent Director"} email={"Alexandr_develop@gmail.com"} phoneNumber={"+38 (098) 198 44 24"}></Card>
                        <Card className={classes.card} photo={photo} name={"Winny"} description={"Former Senior Director"} email={"Winny_develop@gmail.com"} phoneNumber={"+38 (098) 278 22 88"}></Card>
                        <Card className={classes.card} photo={photo} name={"Simon"} description={"President of Commerce"} email={"Simon@gmail.com"} phoneNumber={"+38 (098) 278 44 00"}></Card>

                    </div>
                </div>
            <Button text={"Show more"} className={classes.button}></Button>
            </div>
        );
    }
};

export default Cards;
