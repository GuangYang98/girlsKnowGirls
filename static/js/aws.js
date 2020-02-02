var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://twinword-text-similarity-v1.p.rapidapi.com/similarity/",
    "method": "POST",
    "headers": {
        "x-rapidapi-host": "twinword-text-similarity-v1.p.rapidapi.com",
        "x-rapidapi-key": "8de3a64979msha5e0f8db775f406p12bdf0jsn2c4fd3dd6bf6",
        "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
        "text1": "The hippocampus is a major component of the brains of humans and other vertebrates. It belongs to the limbic system and plays important roles in the consolidation of information from short-term memory to long-term memory and spatial navigation. Humans and other mammals have two hippocampi, one in each side of the brain. The hippocampus is a part of the cerebral cortex; and in primates it is located in the medial temporal lobe, underneath the cortical surface. It contains two main interlocking parts: Ammon's horn and the dentate gyrus.",
        "text2": "An important part of the brains of humans and other vertebrates is the hippocampus. It's part of the limbic system and moves information from short-term to long-term memory. It also helps us move around. Humans and other mammals have two hippocampi, one on each side. The hippocampus is a part of the cerebral cortex; and in primates it is found in the medial temporal lobe, beneathe the cortical surface. It has two main interlocking parts: Ammon's horn and the dentate gyrus."
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});