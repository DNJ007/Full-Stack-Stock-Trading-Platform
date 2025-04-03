import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing page/home/Hero';

// Test Suite

describe("Hero Component",()=>{
    test("renders hero image",()=>{
        render(<Hero />);
        const heroImages = screen.getAllByAltText("Hero Image"); // Returns an array
        expect(heroImages.length).toBeGreaterThan(0); // Ensure at least one image exists
        expect(heroImages[0]).toBeInTheDocument();
        expect(heroImages[0]).toHaveAttribute("src", "media/images/homeHero.png");
    })

    // test("renders signup button",()=>{
    //     render(<Hero />);
    //     const signupButton = screen.getAllByRole("button",{name:'/signup now/i'}); // Returns an array
    //     expect(signupButton).toBeInTheDocument();
    //     expect(signupButton).toHaveClass("btn-primary");
    // })
})


