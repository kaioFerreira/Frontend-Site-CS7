import React from 'react';
import { Container } from './styles';


const PageTitle: React.FC = ({children}) => (
    <Container>
        <div>
            <h1>{children}</h1>
        </div>
    </Container>
);

export default PageTitle;
