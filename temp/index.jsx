var AppBox = React.createClass({
    render: function() {
        return (
            <div className="appBox">
                <HeaderBox />
                <ContactBox />
                <WorkExperienceBox />
            </div>
        );
    }
});

var WorkExperienceBox = React.createClass({
    getInitialState: function() {
        return {
            "TripAdvisor": {
                "name": "TripAdvisor",
                "startDate": "08/2015",
                "endDate": "Present",
                "title": "Software Engineer",
                "location": "Needham, MA"
            }
        }
    },
    render: function() {
        return (
            <div className="workExperienceBox">
                <WorkExperienceEntry data={this.state.TripAdvisor} />
            </div>
        );
    }
});

var WorkExperienceEntry = React.createClass({
    render: function() {
        return (
            <div className="workExperienceEntry">
                <div className="workExperienceEntryCompanyName">
                    <div className="companyName">{this.props.data.name} </div>
                </div>
                <div className="workExperienceEntryTitle">
                    {this.props.data.title}
                </div>
                <div className="workExperienceEntryDate">
                    {this.props.data.startDate} - {this.props.data.endDate}
                </div>
                <div className="workExperienceEntryCompanyLocation">
                        &nbsp;| {this.props.data.location}
                </div>
            </div>
        );
    }
});

var HeaderBox = React.createClass({
    render: function() {
        return (
            <div className="headerBox">
                <TitleBox />
            </div>
        );
    }
});

var TitleBox = React.createClass({
    render: function() {
        return (
            <div className="titleBox">
                <h1>Eliot Wong</h1>
            </div>
        );
    }
});

var ContactBox = React.createClass({
    render: function() {
        return (
            <div className="contactBox">
                <h2>Contact Me</h2>
                ecwong@alumni.cmu.edu<br />
                617-281-1222
            </div>
        );
    }
});

var ContactPhoneNumber = React.createClass({
    render: function() {
        return (
            <div className="phoneNumber">
                617-281-1222
            </div>
        );
    }
});

React.render(<AppBox />, document.getElementById('content'));
