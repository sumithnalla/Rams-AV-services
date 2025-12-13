// equipment-data.js
const equipmentData = [
    {
        id: 1,
        name: "Visiontek Wall Mount Pull Down 4×6 84inchs",
        price: "₹2999/day",
        image: "led_1.jpeg",
        description: "Samsung SMD P3.91 Indoor LED Display",
        category: "led",
        specs: [
            "Pixel Pitch: 3.91mm",
            "Brightness: 1200 nits",
            "Resolution: 2560x1440",
            "Viewing Angle: 160°"
        ],
        features: [
            "High Refresh Rate",
            "Energy Efficient",
            "Easy Installation",
            "Indoor Use"
        ]
    },
    {
        id: 2,
        name: "Map type screen 6×8 Easy To Carry",
        price: "₹2500/day",
        image: "led_2.jpg",
        description: "Barco OLite 510 HD Outdoor LED Panel",
        category: "led",
        specs: [
            "Pixel Pitch: 6.67mm",
            "Brightness: 6500 nits",
            "Waterproof: IP65",
            "Resolution: 1920x1080"
        ],
        features: [
            "Weather Resistant",
            "Sunlight Readable",
            "Dust Proof",
            "Outdoor Rated"
        ]
    },
    {
        id: 3,
        name: "RD BIG MIC SPEAKER USB BLUETOOTH",
        price: "₹6,500/day",
        image: "speaker_1.webp",
        description: "JBL PRX815W 15-inch Powered Speaker",
        category: "audio",
        specs: [
            "Power: 1500W Peak",
            "Frequency: 45Hz-20kHz",
            "Weight: 24.5 kg",
            "Connections: XLR, 1/4\""
        ],
        features: [
            "Built-in Amplifier",
            "Bluetooth Connectivity",
            "DSP Processing",
            "Portable Design"
        ]
    },
    {
        id: 4,
        name: "Speaker & Mic Combo",
        price: "₹1,799/day",
        image: "speaker_2.webp",
        description: "Bose ShowMatch DeltaQ Array Loudspeaker",
        category: "audio",
        specs: [
            "Power: 2000W RMS",
            "Coverage: 120° x 20°",
            "Frequency: 40Hz-18kHz",
            "Max SPL: 139 dB"
        ],
        features: [
            "Array Technology",
            "Uniform Coverage",
            "Lightweight Design",
            "Professional Grade"
        ]
    },
    {
        id: 5,
        name: "RD INTREX M222 WIFI 4K 3D PROJECTOR 200 INCHS",
        price: "₹8,500/day",
        image: "projector_1.jpeg",
        description: "Epson EB-2250U WUXGA 5000 Lumens",
        category: "projector",
        specs: [
            "Resolution: WUXGA (1920x1200)",
            "Brightness: 5000 Lumens",
            "Contrast: 15,000:1",
            "Lamp Life: 10,000 hours"
        ],
        features: [
            "HDMI & USB Ports",
            "Wireless Capable",
            "Quiet Operation",
            "Ceiling Mountable"
        ]
    },
    {
        id: 6,
        name: "RD INTREX MINI PROJECTOR 30 INCHS",
        price: "₹3,500/day",
        image: "projector_2.webp",
        description: "Sony VPL-FHZ75 WUXGA Laser Projector",
        category: "projector",
        specs: [
            "Resolution: WUXGA (1920x1200)",
            "Brightness: 7000 Lumens",
            "Laser Life: 20,000 hours",
            "Contrast: 2,500,000:1"
        ],
        features: [
            "Laser Light Source",
            "Low Maintenance",
            "4K Enhancement",
            "360° Installation"
        ]
    }
];

// Export the data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = equipmentData;
}