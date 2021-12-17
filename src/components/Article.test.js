import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
    id: '123', 
    author:"someone",
    headline: "headline", 
    createdOn: '2021-08-09T18:02:38-04:00 ', 
    summary: "summary", 
      body: "this is the body"  
}

test('renders component without errors', ()=> {
    render(<Article article={testArticle} />)
});

 test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} />)
    //const headline = screen.queryByText(/headline/i)
    //const author = screen.queryByText(/someone/i);
    
    //expect(headline).toBeInTheDocument();
   // expect(author).toBeInTheDocument();
});

 test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle} />)
});

 test('executes handleDelete when the delete button is pressed', ()=> {
    render(<Article article={testArticle} />)
});

//Task List:
//1. Complete all above tests. Create test article data when needed.