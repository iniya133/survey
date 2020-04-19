class Form{
    constructor(){        
        // Create an element for the title of the webpage
        this.title = createElement('h1', "A Survey to Bring About Change");

        // Create the input box for entering the email
        this.input = createInput("Email");

        // Create the button for starting the survey
        this.button = createButton("Start survey");

        // Create an element for the first question
        this.firstQuestion = createElement('p', "Q1. Do you think we need to have a basketball court for students to practise?");

        // Create the radio buttons for the first question
        this.radio1 = createRadio();
        // Add the options for the radio button for the first question
        this.radio1.option('Yes');
        this.radio1.option('No');

        // Create an element for the second question
        this.secondQuestion = createElement('p', "Q2. Would you be willing to contribute a small amount every month for such a program?");

        // Create the radio buttons for the second question
        this.radio2 = createRadio();
        // Add the options for the radio button for the second question
        this.radio2.option('Yes');
        this.radio2.option('No');

        this.emailIndex = null;
    }

    display(){
        this.title.position(500, 100);
        this.input.position(560, 200);
        this.button.position(665, 260);
        this.firstQuestion.position(50, 200);
        this.radio1.position(45, 250);        
        this.secondQuestion.position(50, 300);
        this.radio2.position(45, 350);
    }

    style(){
        this.input.style('textAlign', 'center');
        this.input.style('textSize', '20px');
        this.input.style('fontWeight', 'bold');
        this.input.style('width', '300px');
        this.input.style('height', '20px');
        this.button.style('fontSize', '15px');
        this.button.style('backgroundColor', 'rgb(255, 255, 255)');
        this.firstQuestion.style('fontSize', '20px');
        this.radio1.style('width', '60px');
        this.radio1.style('fontSize', '20px');
        this.secondQuestion.style('fontSize', '20px');
        this.radio2.style('width', '60px');
        this.radio2.style('fontSize', '20px');
    }

    hide(){
        this.firstQuestion.hide();
        this.radio1.hide();
        this.secondQuestion.hide();
        this.radio2.hide();
    }

    updateState(){
        this.button.mousePressed(()=>{
            if(gameState === START){
                this.input.hide();
                this.button.hide();
                gameState = PLAY;
            }
            counter += 1;
        });
    }

    StartSurvey(){
        if(gameState === PLAY){
            this.firstQuestion.show();
            this.radio1.show();
            this.secondQuestion.show();
            this.radio2.show();
        }
    }

    updateEmail(){
        this.emailIndex = this.input.value();
        var email1ref = database.ref('emails/' + counter);
        email1ref.ref.set({
            email: this.emailIndex
        });
    }
}