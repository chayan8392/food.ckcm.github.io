let updateReviewSlider = (cards) => {

    cards.forEach((card_index) => {
        reviews[card_index].classList.add('active');
    });
};
