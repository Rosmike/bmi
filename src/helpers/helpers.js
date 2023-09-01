function createRandomUserData(minHeight = 160, maxHeight = 198, minWeight = 50, maxWeight = 130) {
    const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    const randomWeight = Math.floor(Math.random() * (maxWeight - minWeight + 1)) + minWeight;

    return {
        height: randomHeight,
        weight: randomWeight,
    };
}

export { createRandomUserData };
