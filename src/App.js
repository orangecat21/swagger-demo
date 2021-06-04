import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import APIDefinition from './APIDefinition.json';

const App = () => <SwaggerUI spec={APIDefinition}/>

export default App;
