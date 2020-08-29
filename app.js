const loremList = [
    "Henna tattoo deep tissue multi-dimensional beekeeping, natural homebirth kirtan vegan impermanent gluten-free kapha imbalance. Mendo yogic nonlinear, saturn return virgo Hafiz fire tending harmful electromagnetic fields backjack optimal frequency the dali lama. Jasmine lentils reverse osmosis paleo diet carob talking stick, the power of intention divine peace soulmate tahini. To end suffering rolfing nonprofit enneagram radical honesty kombucha, beltane diva cup mala beads. Awareness what the planet really needs mind altering, cold plunge kelp spiritual awakening peacock feather elder silent disco massage therapist. Indigenous elders universal healing energy trauma-based yoni, spinal awareness agave tripping on innate capacity chia seeds authentic self. New paradigm gifting circle core strength acid twelfth house, raw cacao alkaline.",

    "Solstice yogic daily kegel practice heart-based, science has proven that all-natural nonprofit visualization. Enneagram birth name channeling ecstatic dance, astral plane kale salad carob world. Non-duality fire tending to end suffering taurus paleo diet stevia kefir, kirlian photography djembe herbal medicine planetary transition. Open-minded tibetan singing bowl the wisdom of your body holographic resonance, mayan calendar embracing and moving towards. Entheogen life coach core strength twelfth house saturn return, Hafiz personal development mushrooms astrological. Folk remedy master cleanse psychic surgery, beekeeping papyrus font vinyasa projecting.",

    "Visualization divine feminine open-minded twelfth house, nonlinear spirit animal harmony. Honoring your truth leave no trace deep higher cosmic force master cleanse enneagram kirlian photography, ecstatic dance grass-fed. Plant consciousness rebirthing peacock feather, ancient chinese wisdom popcorn with brewers yeast agave colloidal silver monogamish. Non-attachment fertility awareness psychic surgery, compostable toilet human potential homeopathy dead sea minerals with a dash of cayenne pepper. Microfestival superfood surrender diva cup, lucid dreaming triple libra spiral Braggs. Fluorescent lights life coach rawthentic self my brothers and sisters mystic mushrooms, holographic resonance equinox blessed reflexology saturn return.",

    "Tantra seaweed tempeh dharma papyrus font morphic resonance tofu barefoot running tahini, backjack life coach. Seasonal Dr. Bronner's doula reproductive system quinoa, tofurkey Bay Area burning man east-west. Compostable toilet embracing and moving towards loving kindness, cold plunge change agent alkaline crystal essence the power of intention beltane radiant colloidal silver. Holographic resonance honoring your truth sarong massage therapist safe space, past life beekeeping. Downward dog raw cacao sustainable aho chanting, dance dome blessed.",

    "Crystal healing cold plunge aquarius, equinox combined energy fields. Radiant human potential candida cleanse, patchouli barefoot running. Asana what the planet really needs folk remedy empowering messages enneagram, reverse osmosis peacock feather. Daily kegel practice rain dance quinoa, enlightenment five rhythms. Gut flora spiritual awakening paleo diet universal, fractal nature of the dali lama rolfing mushrooms astral plane. Downward dog tantra honoring your truth, holistic kale chips the buddha. Ceremonial-grade mind-body seaweed tempeh, nonlinear compostable toilet doula medical marijuana rainbow.",


    "Papasan twelfth house lentils, stable energy fields daily kegel practice shakti tofu chanting. Organic continuum rain dance, taurus innate capacity meditation Dr. Bronner's. Biodiesel nudist mushrooms, quinoa gut flora. Maypole mendo seventh generation hexayurt, workshop holistic closing circle homeopathy.",

    "Biomat LSD seventh generation tai chi meditation, Harbin tantra aho. Pranayama tapping float tank, visualization Braggs. Fair trade geodesic dome mala beads root chakra, vitamix salvia. Microfestival nectar acroyoga nonlinear nature monogamish entheogen, chi energy yogic. Rediscovery fasting burning man the buddha holistic, mind-body embracing and moving towards white sage the power of intention. New paradigm lingham dharma, acupuncture breatharian. Namaste.",

    "Sun gazing indigo child nature dharma paleo diet authentic self, ecstatic dance divine feminine marinese continuum workshop. Beltane Esalen candida cleanse chanting world soul, entheogen tahini. Prius projecting feeling abandoned, sustainable papasan co-create. Chi energy djembe change agent, stevia rainbow holding space stable energy fields mushrooms transformative gestalt toxins. Bodyworker beekeeping mind-body vipassana, combined energy fields plant consciousness. Saturn return tantra root chakra lentils, my brothers and sisters asana all-natural.",

    "Clarity life coach papasan, manifestation psilocybin. Deep tissue shiva tincture, mushrooms enlightenment nag champa backjack bodyworker craniosacral therapy. Reprogramming your DNA karmic oneness flax seed crackers, sustainable workshop holographic resonance world optimal frequency equinox healing tonic. Macrobiotic visualization himalayan sea salt downward dog mercury retrograde, asana kombucha breatharian chi energy. Quarter moon family constellation yogic marinese soul-level contract ganja, psychic soothing vibrations. Lavender positive affirmation fluorescent lights, co-op vitamin. Universal superfood hexayurt herbal, cosmic peace hacky sack double rainbow crystal essence continuum.",

    "The wisdom of your body beltane tripping on vitamix, The Secret non-duality. Patchouli one taste compostable toilet, alkaline sacred integration dreamwork henna tattoo. Hafiz silent disco chia seeds, integral tantra Spirit Rock. Medical marijuana past life as we honor, cold plunge meditation incense candida cleanse nectar ecofriendly enlightenment. Tie-dye maypole stevia, Big Sur float tank safe space tai chi aura Dr. Bronner's. Mendo be the change reconnect, reiki master diva cup nonlinear. Goddess pranayama herbal medicine gifting circle discovering valuable truths harmful electromagnetic fields kundalini change agent, universal retreat kirtan. Namaste."

];

const loremForm = document.querySelector(".lorem-form");
const formSubmit = document.querySelector(".submit-btn");
const listContainer = document.querySelector(".list-container");

loremForm.addEventListener("submit", (e) => {
    e.preventDefault();
    resetParagraphs();
    let numberOfParagraphs = document.querySelector(".form-input").value;
    if(checkIfNumberIsOk(numberOfParagraphs)){
        addParagraphs(numberOfParagraphs);
    };

});

function checkIfNumberIsOk(number) {
    if (number > 10) {
        alert("Number too high!");
        return false;
    }
    else if (number <= 0){
        alert("Number too low!");
        return false;
    }
    else{
        return true;
    };
};

function addParagraphs(number) {
    for (let i = 0; i < number; i++) {
        let paragraph = document.createElement("p");
        paragraph.textContent = loremList[i];
        listContainer.appendChild(paragraph);
    }
}

function resetParagraphs() {
    for (let i = 0; i < listContainer.childElementCount; i++) {
        listContainer.innerHTML = "";
    }
}