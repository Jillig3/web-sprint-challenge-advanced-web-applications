import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';

jest.mock('../mocks/api')

const testArticle = {
    articles: [
        {
            headline: "test header",
            author: "test author",
        },
        {
            headline: "test header1",
            author: "test author1",
        },
        {
            headline: "test header2",
            author: "test author2",
        }
    ]
}

const emptyArticle = {
 article:[]
}

test("renders zero articles without errors", async () => {
    mockFetchArticle.mockResolvedValueOnce(emptyArticle);
    render(<View />);
    const empty = await screen.findByTestId('ArticleContainer')
    expect(empty).toBeInTheDocument();
});

test("renders three articles without errors", async ()=> {
    mockFetchArticle.mockResolvedValueOnce(testArticle);
    render(<View />);
    const articles = await screen.findByTestId('ArticleContainer')

    expect(articles).toBeInTheDocument();
    expect(articles).toHaveLength(3);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.