import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './styles.css';
class ErrorBoundary extends React.Component {
 constructor(props){super(props);this.state={error:false};}
 static getDerivedStateFromError(){return {error:true};}
 render(){return this.state.error?<main className="fatal-error"><h1>A brief intermission.</h1><p>The crossword hit an unexpected problem. Your saved progress is still in this browser.</p><button className="primary-button" onClick={()=>window.location.reload()}>Reload the puzzle</button></main>:this.props.children;}
}
createRoot(document.getElementById('root')).render(<ErrorBoundary><App/></ErrorBoundary>);
