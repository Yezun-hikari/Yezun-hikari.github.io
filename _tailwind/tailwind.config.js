module.exports = {
    darkMode: 'class',
    content: ['./index.html', './projects.html', './404.html', './_layouts/**/*.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['"Times New Roman"', 'Times', 'serif'],
            },
            colors: {
                accent: '#8e9aaf',
                darkBg: '#121212',
                lightBg: '#fdfdfd',
            }
        }
    }
}
