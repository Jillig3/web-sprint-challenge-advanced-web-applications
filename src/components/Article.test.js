import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render } from 'react-dom';



const testArticle = {
    headline: "test header",
    author: "test author"
}

const testArticle1 = {
    headline: "test header",
    author: null
}

test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>);
    const headline = screen.getByText(/test header/i);
    const author = screen.getByText(/test author/i);

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(headline).toBeTruthy();
    expect(author).toBeTruthy();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={testArticle1}/>);
    const author = screen.getByText(/Associated Press/i);

    expect(author).toHaveTextContent("Associated Press");
});

test('executes handleDelete when the delete button is pressed', ()=> {
    render(<Article article={testArticle}/>);
    const button = screen.getByTestId("deleteButton");
    userEvent.click(button);

    expect(author).not.toBeInTheDocument();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.