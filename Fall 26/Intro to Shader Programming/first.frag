void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord / iResolution.xy;

    // TODO: fill in each one below, then set col to it to see what it looks like

    // length() of uv
    float len = 0.0; 

    // using step(), black left half, white right half
    float s = 0.0; 

    // using mix(), white on the left, fading to black on the right
    float m = 0.0; 

    // using fract(), 5 repeating gradients across the screen
    float f = 0.0; 
    
    // using smoothstep(), soft edge between 0.4 and 0.6
    float ss = 0.0; 

    vec3 col = vec3(len); // swap len with other variables to test

    // Output to screen
    fragColor = vec4(col,1.0);
}
