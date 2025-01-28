from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///Event-Registration.db"
db.init_app(app)

class Participant(db.Model):
    __tablename__ = "Participants"
    ID = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String, nullable=False)
    Email = db.Column(db.String, unique=True, nullable=False)
    Phone_no = db.Column(db.String, unique=True, nullable=False)  # Use String for phone numbers
    Events = db.Column(db.PickleType, nullable=False)

with app.app_context():
    db.create_all()

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        phone_no = request.form.get("phone")
        events = []
        if request.form.get("event1"):
            events.append(request.form.get("event1"))
        if request.form.get("event2"):
            events.append(request.form.get("event2"))
        if request.form.get("event3"):
            events.append(request.form.get("event3"))
        
        # Save to the database
        participant = Participant(Name=name, Email=email, Phone_no=phone_no, Events=events)
        try:
            db.session.add(participant)
            db.session.commit()
            return "Registration successful!"
        except Exception as e:
            return f"An error occurred: {e}"

    return render_template("register.html")

if __name__ == "__main__":
    app.run(debug=True)
