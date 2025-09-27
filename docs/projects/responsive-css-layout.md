# Responsive layout project

Brief: 
  Use css `rem` so that the whole UI scales when you change just one value.

Value Added:
  On small screens → everything shrinks proportionally.
  On big screens → everything enlarges.

## Steps:

1. Set a scalable root font size
```css
html {
  font-size: 16px;  /* 1rem = 16px */
}
```


If you later decide html { font-size: 18px; }, everything that uses rem will scale up.

2. Use rem for typography
```css
h1 { font-size: 2rem; }    /* 32px if base = 16px */
h2 { font-size: 1.5rem; }  /* 24px */
p  { font-size: 1rem; }    /* 16px */
small { font-size: 0.875rem; } /* ~14px */
```

3. Use rem for spacing
```css
.container {
  padding: 2rem;      /* 32px */
  margin: 1rem auto;  /* 16px */
  max-width: 60rem;   /* 960px */
}
```

4. Responsive scaling with media queries

You can change the root font size depending on screen width.
That way, all elements resize automatically.
```css
html {
  font-size: 16px; /* default */
}

@media (max-width: 768px) {
  html {
    font-size: 14px; /* smaller screens → shrink */
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 18px; /* large screens → bigger */
  }
}
```