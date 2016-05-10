
var headerText = "ICI Video Conference Bingo";

var footerText = "<a href='https://github.com/jeffehobbs/HTML5-bingo/' target='_blank'>Adapted from jeffehobbs HTML5-bingo (Thanks!)</a>";

var winText = "Winner";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var JSONBingo = {"squares": [
        {"square": "Dog barking"},
        {"square": "\"Can you repeat that?\""},
        {"square": "Too early in the a.m. to share video"},
        {"square": "\"Are we including the school too?\""},
        {"square": "\"Do we have buy-in from the ET?\""},
        {"square": "Bad internet connection"},
        {"square": "Someone's eating"},
        {"square": "Two people with same name"},
        {"square": "Someone typing loudly"},
        {"square": "Comment about someone's home office"},
        {"square": "\"I have to hop off for another meeting.\""},
        {"square": "\"Sorry I'm late, I had another meeting.\""},
        {"square": "Someone introduces their cat/dog to the team"},
        {"square": "Awkward silence"},
        {"square": "\"Is everyone here?\""},
        {"square": "\"Did we just lose ______?\""},
        {"square": "Two people whose voices sound similar"},
        {"square": "Somebody can't get video camera working"},
        {"square": "Under-caffeinated West Coaster"},
        {"square": "Video freezes at unflattering moment"},
        {"square": "Echo issues"},
        {"square": "Request to mute/unmute"},
        {"square": "Request to use headphones"},
        {"square": "\"Ahh, technology.\""},
        {"square": "Jeff has hair issues"},
        {"square": "Dave T didn't make his bed"},
        {"square": "Wine bottle from night before(?)"},
        {"square": "Roommate or partner passes in background"},
        {"square": "Bright background, AKA witness protection"},
        {"square": "text alerts, email chimes, Tinder matches"}
    ]
};
