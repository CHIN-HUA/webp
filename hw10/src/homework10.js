import React from 'react'
import $ from  'jquery'
import gitPic from './git.png'
class UserGithub extends React.Component {
    // 繼承component
    constructor(props) {
    super(props);
    this.state = {
    username: '',
    githubtUrl: '',
    avatarUrl: '',
    loc:'',
    blogUrl:'',
    follower:'',
    following:'',
    gitId:'',
    acc:'',
    }
    }
    componentDidMount() {
    $.get(this.props.source, (result) => {
    console.log(result);
    const data = result;
    if (data) {
    this.setState({
    username: data.name,
    githubtUrl: data.html_url,
    avatarUrl: data.avatar_url,
    loc: data.location,
    blogUrl:data.blog,
    follower:data.followers_url,
    following:data.following_url,
    gitId:data.id,
    acc:data.login
    });
    }
    });
    }
    
    render() {
    //   const x={textShadowOffset:{width:3, height:5}, textShadowColor:'black'};
       const s={ letterSpacing:5};
       const photo ={height:40,width: 40};
    return (
    <div>
    <img src={this.state.avatarUrl} />
    <h2 >{this.state.username}</h2>
    <h3 >{this.state.acc}</h3>
    <h3 >{this.state.gitId}</h3>
    <a href={this.state.githubtUrl}> <img style={photo} src={gitPic} /></a>
        <div style={s}><a href={this.state.follower}>Followers </a><span ><a href={this.state.following}> Following</a></span></div>
    <h3>{this.state.loc}</h3>
    </div>
    );
    }
   }
   const git=()=>{
    var output=[];
    output.push(<UserGithub source="https://api.github.com/users/CHIN-HUA">ok</UserGithub>)
    return output;
   } 
   export default git;
//    ReactDOM.render(
//     <UserGithub source="https://api.github.com/users/samwang1228" />,
//     document.getElementById('root')
//    );