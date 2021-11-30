const questions = [
    { // 0
        img: "/img/corned_brisket.jpg",
        correct: [1,0,1]
    },
    { // 1
        img: "/img/flat_half_boneless.jpg",
        correct: [1,1,1]
    },
    { // 2
        img: "/img/whole_boneless.jpg",
        correct: [1,2,1]
    },
    { // 3
        img: "/img/7_bone_pot_roast.jpg",
        correct: [0,3,1]
    },
    { // 4
        img: "/img/arm_pot_roast.jpg",
        correct: [0,4,1]
    },
    { // 5
        img: "/img/arm_pot_roast_boneless.jpg",
        correct: [0,5,1]
    },
    { // 6
        img: "/img/blade_roast.jpg",
        correct: [0,6,1]
    },
    { // 7
        img: "/img/eye_roast_boneless.jpg",
        correct: [0,7,2]
    },
    { // 8
        img: "/img/eye_steak_boneless.jpg",
        correct: [0,8,0]
    },
    { // 9
        img: "/img/mock_tender_roast.jpg",
        correct: [0,9,1]
    },
    { // 10
        img: "/img/mock_tender_steak.jpg",
        correct: [0,10,1]
    },
    { // 11
        img: "/img/petite_tender.jpg",
        correct: [0,11,0]
    },
    { // 12
        img: "/img/shoulder_pot_roast_boneless.jpg",
        correct: [0,12,2]
    },
    { // 13
        img: "/img/flat_iron.jpg",
        correct: [0,13,0]
    },
    { // 14
        img: "/img/flank_steak.jpg",
        correct: [5,14,2]
    },
    { // 15
        img: "/img/poterhouse_steak.jpg",
        correct: [4,15,0]
    },
    { // 16
        img: "/img/tbone_steak.jpg",
        correct: [4,16,0]
    },
    { // 17
        img: "/img/tenderloin_roast.jpg",
        correct: [4,17,0]
    },
    { // 18
        img: "/img/tenderloin_steak.png",
        correct: [4,18,0]
    },
    { // 19
        img: "/img/top_loin_steak_boneless.png",
        correct: [4,19,0]
    },
    { // 20
        img: "/img/top_loin_steak.png",
        correct: [4,20,0]
    },
    { // 21
        img: "/img/top_sirloin_cap_steak_boneless.jpg",
        correct: [4,21,0]
    },
    { // 22
        img: "/img/top_sirloin_steak_boneless_cap_off.png",
        correct: [4,22,0]
    },
    { // 23
        img: "/img/top_sirloin_steak_boneless.png",
        correct: [4,23,0]
    },
    { // 24
        img: "/img/tri_tip_roast.jpg",
        correct: [4,24,0]
    },
    { // 25
        img: "/img/short_ribs.jpg",
        correct: [3,25,1]
    },
    { // 26
        img: "/img/skirt_steak_boneless.jpg",
        correct: [3,26,2]
    },
    { // 27
        img: "/img/rib_roast.jpg",
        correct: [2,27,0]
    },
    { // 28
        img: "/img/ribeye_roast_boneless.jpg",
        correct: [2,28,0]
    },
    { // 29
        img: "/img/ribeye_steak_boneless.jpg",
        correct: [2,29,0]
    },
    { // 30
        img: "/img/ribeye_steak_lip_on.jpg",
        correct: [2,30,0]
    },
    { // 31
        img: "/img/bottom_round_roast.jpg",
        correct: [6,31,2]
    },
    { // 32
        img: "/img/bottom_round_rump_roast.jpg",
        correct: [6,32,2]
    },
    { // 33
        img: "/img/bottom_round_steak.jpg",
        correct: [6,33,1]
    },
    { // 34
        img: "/img/eye_round_roast.jpg",
        correct: [6,34,2]
    },
    { // 35
        img: "/img/eye_round_steak.jpg",
        correct: [6,35,2]
    },
    { // 36
        img: "/img/round_steak.jpg",
        correct: [6,36,1]
    },
    { // 37
        img: "/img/round_steak_boneless.jpg",
        correct: [6,37,1]
    },
    { // 38
        img: "/img/tip_roast_cap_off.jpg",
        correct: [6,38,2]
    },
    { // 39
        img: "/img/tip_steak_cap_off.jpg",
        correct: [6,39,0]
    },
    { // 40
        img: "/img/top_round_roast.jpg",
        correct: [6,40,0]
    },
    { // 41
        img: "/img/top_round_steak.png",
        correct: [6,41,0]
    },
    { // 42
        img: "/img/beef_for_stew.png",
        correct: [8,42,1]
    },
    { // 43
        img: "/img/cubed_steak.png",
        correct: [8,43,2]
    },
    { // 44
        img: "/img/ground_beef.png",
        correct: [8,44,0]
    },
    { // 45
        img: "/img/heart.png",
        correct: [7,45,2]
    },
    { // 46
        img: "/img/kidney.png",
        correct: [7,46,2]
    },
    { // 47
        img: "/img/liver.png",
        correct: [7,47,2]
    },
    { // 48
        img: "/img/oxtail.png",
        correct: [7,48,1]
    },
    { // 49
        img: "/img/tounge.png",
        correct: [7,49,2]
    },
    { // 50
        img: "/img/tripe.png",
        correct: [7,50,1]
    }
];

const question_answers = [];

// Primal
question_answers[0] = [
    "Chuck",    // 0
    "Brisket",  // 1
    "Ribs",     // 2
    "Plate",    // 3
    "Loin",     // 4
    "Flank",    // 5
    "Round",    // 6
    "Variety",  // 7
    "Various"   // 8
];

// Retail
question_answers[1] = [
    "Corned Beef",                          // 0
    "Flat Half Boneless",                   // 1
    "Whole Boneless",                       // 2
    "7 Bone Pot Roast",                     // 3
    "Arm Pot Roast",                        // 4
    "Arm Pot Roast Boneless",               // 5
    "Blade Roast",                          // 6
    "Eye Roast Boneless",                   // 7
    "Eye Steak Boneless",                   // 8
    "Mock Tender Roast",                    // 9
    "Mock Tender Steak",                    // 10
    "Petite Tender",                        // 11
    "Shoulder Pot Roast Boneless",          // 12
    "Top Blade Steak or Flat Iron",         // 13
    "Flank Steak",                          // 14
    "Poterhouse Steak",                     // 15
    "T-Bone Steak",                         // 16
    "Tenderloin Roast",                     // 17
    "Tenderloin Steak",                     // 18
    "Top Loin Steak Boneless",              // 19
    "Top Loin Steak",                       // 20
    "Top Sirloin Cap Steak Boneless",       // 21
    "Top Sirloin Steak Boneless Cap Off",   // 22
    "Top Sirloin Steak Boneless",           // 23
    "Tri Tip Roast",                        // 24
    "Short Rib",                            // 25
    "Skirt Steak Boneless",                 // 26
    "Rib Roast",                            // 27
    "Ribeye Roast Boneless",                // 28
    "Ribeye Steak Boneless",                // 29
    "Ribeye Steak Lip-On",                  // 30
    "Bottom Round Roast",                   // 31
    "Bottom Round Rump Roast",              // 32
    "Bottom Round Steak",                   // 33
    "Eye Round Roast",                      // 34
    "Eye Round Steak",                      // 35
    "Round Steak",                          // 36
    "Round Steak Boneless",                 // 37
    "Tip Roast Cap Off",                    // 38
    "Tip Steak Cap Off",                    // 39
    "Top Round Roast",                      // 40
    "Top Round Steak",                      // 41
    "Beef for Stew",                        // 42
    "Cubed Steak",                          // 43
    "Ground Beef",                          // 44
    "Heart",                                // 45
    "Kidney",                               // 46
    "Liver",                                // 47
    "Oxtail",                               // 48
    "Tongue",                               // 49
    "Tripe",                                // 50
];

// Cooking Method
question_answers[2] = [
    "Dry",
    "Moist",
    "Dry/Moist"
];