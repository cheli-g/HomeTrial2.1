# HomeTrial2

על הלקוח לפתוח את הפרויקט הראשי בVSVODE ולהריץ
NPM START
לאחר מכן עליו לגשת לPOSTMAN ולעשות את הניתובים הבאים.
אם ברצונו לגשת/להוסיף בUSERS הוא יכניס בשורה localhost:3740/users/ וישנה את סוג הבקשה- GET/ /POST או localhost:3740/user/userId אם ברצונו להציג משתמש ספציפי על פי הID שלו.

אם ברצונו לגשת / להוסיף בCORONA הוא יכניס בשורה localhost:3740/corona/ וישנה את סוג הבקשה GET/ POST או localhost:3740/corona/dataId אם ברצונו לסנן למידע מסוים על פי הID שלו

בביצוע בקשת POST בUSERS יש לשלוח את השדות הבאים בטיפוסים הבאים במבנה הבא:

        {
            
            "fullName": "string",
            "idNumber": "string",
            "address": [
                {
                    "city": "string",
                    "street": "string",
                    "houseNumber": number,
                  
                }
            ],
            "bearthDate": "date",
            "phon": "number",
            "mobile": "number",
           
        }
       
לביצוע בקשת POST בCORONA יש לשלוח את השדות הבאים בטיפוסים הבאים במבנה הבא:

        {
          
            "idNumber": "string",
            "timeOfVaccination": [
                {
              //maximun 4 fields
                    "date1": "date",
                    "date2": "date",
                   
                }
            ],
            "manufacturer": [
                {
              //maximun 4 fields, have to be much to count of vaccinations                
                    "manufacturer1": "string",
                    "manufacturer2": "string"
                }
            ],
            "coronaVirusDesease": [
                {
                    "positive": "date",
                    "negative": "date",
                    
                }
            ]
          
        }       
        תמונה של POST בUSERS
        ![image](https://github.com/cheli-g/HomeTrial2/assets/96668250/10f0e686-6151-429b-ae79-a1c001e27f78)

        
        תמונה של POST בCORONA
        ![image](https://github.com/cheli-g/HomeTrial2/assets/96668250/a5faa381-1c31-4001-a58d-de30eeb4f424)

        
        
        
        
      
      על מנת ליצור את הפרויקט הותקנו השירותים הבאים {

  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.1.1",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.22"
  
        
        
        
        
        
        
        
        הנחות מקלות: החלטתי שלא לבצע בדיקות וואלידציה אלא להסתמך על קלט תקין
        
        
        
   
