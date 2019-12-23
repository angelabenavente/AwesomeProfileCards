import React from 'react';
import '../scss/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form'
import CardPreview from './CardPreview';
import GetAvatar from './GetAvatar';
import Profile from './Profile';
import defaultImage from './defaultImage';


class CardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          palette: 1,
          fullName: '',
          job: '',
          isAvatarDefault: true,
          profile: {
            avatar: defaultImage
          },
          phone: '',
          email: '',
          linkedin: '',
          github: ''

        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.updateAvatar = this.updateAvatar.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
      }

      resetHandler() {
        this.setState({
          palette: 1,
          fullName: '',
          job: '',
          isAvatarDefault: true,
          profile: {
            avatar: defaultImage
          },
          phone: '',
          email: '',
          linkedin: '',
          github: ''
        });
        console.log('hola')
      }

      onChangeHandler(event) {
        const stateName = event.target.name;
        const newValue = event.target.value;
        this.setState({
          [stateName]: newValue // `${stateName}`: newValue
        });
      }

    updateAvatar(img) {
        const {profile} = this.state;
        this.setState(prevState => {
          const newProfile = {...profile, avatar: img};
          return {
            profile: newProfile,
            isAvatarDefault: false
          }
        });
      }

    render(data) {
      const {profile, isAvatarDefault} = this.state;
      return (
        <div>
            <Header />
            <main className="main__card">
                <CardPreview resetHandler={this.resetHandler} palette={this.state.palette} fullName={this.state.fullName} job={this.state.job} linkedin={this.state.linkedin} github={this.state.github} email={this.state.email} phone={this.state.phone} >
                <Profile avatar={profile.avatar} />
                </CardPreview>
                <Form onChangeHandler={this.onChangeHandler} userName={this.state.fullName} userJob={this.state.job} userEmail={this.props.userEmail} userPhone={this.props.userPhone} userLinkedin={this.props.userLinkedin} userGithub={this.props.userGithub}>
                <GetAvatar 
                    avatar={profile.avatar} 
                    isAvatarDefault={isAvatarDefault} 
                    updateAvatar={this.updateAvatar} />
                </Form>
            </main>
            <Footer />
        </div>
      );
    }
  }

export default CardPage;

        /*
        console.log(data)
        console.log(id)
        this.setState((prevState, props) => {
          let newName = prevState.name;
          let newJob = prevState.job;
          if (id === 'fullName') {
            newName = data;
          } else if (id === 'job') {
            newJob = data;
          } else {
            console.log(`onChangeHandler(id=${id}) valor no está considerado`)
          }
          return { 
            name: newName, 
            job: newJob };
        });*/
      