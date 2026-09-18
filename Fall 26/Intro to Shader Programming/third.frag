void mainImage( out vec4 fragColor, in vec2 fragCoord )
{    
    // oneliner putting uv in range of -1 <> 1
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
        
    vec3 col; 
    float r = 0.7;
    
    // TODO: circle sdf (hint: distance from center - radius)     
    float d = length(uv) - r;
    //col = vec3(d);
    
    // TODO: give the circle a hard edge
    // hint #1: use d from above and step()
    // hint #2: think of values for step() that relate d to the value that represents the edge of the circle sdf
    float sd;
    //col = vec3(sd);

    // TODO: give the circle a softer edge
    // hint: smoothstep()
    float ssd;
    //col = vec3(ssd);

    fragColor = vec4(col, 1.0);
}