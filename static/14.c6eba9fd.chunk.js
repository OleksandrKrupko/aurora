webpackJsonp([14],{1168:function(e,n,a){var t=a(0),r=a(65),o=a(14).PageRenderer;o.__esModule&&(o=o.default);var i=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:a(1193)}},componentWillMount:function(){},render:function(){return t.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i},1193:function(e,n){e.exports='### Header Props\n\n```table\nspan: 6\nrows:\n  - Prop: deg\n    Type: object\n    Default: small = 76deg, medium = 80deg, large  = 81\n    Notes: Sets the gradient rotation per breakpoint\n  - Prop: from\n    Type: string\n    Default:\n    Notes: Starting gradient color\n  - Prop: to\n    Type: string\n    Default:\n    Notes: Ending gradient color\n  - Prop: backgroundImage\n    Type: string\n    Default:\n    Notes: Uses an image as background instead of a gradient\n  - Prop: children\n    Type: node\n    Notes: Children to render inside of inner Row component\n  - Prop: className\n    Type: string\n    Notes: Class to pass to HeaderGradient component\n  - Prop: style\n    Type: object\n    Notes: Styles object to pass to HeaderGradient component\n  - Prop: withOverlay\n    Type: boolean\n    Notes: Applies a dark gradient to header\n  - Prop: withSpotLight\n    type: boolean\n    Notes: Applies a "spotlight" gradient to header\n```\n\n### HeaderWithImage Props\n\n```table\nspan: 6\nrows:\n  - Prop: deg\n    Type: object\n    Default: small = 76deg, medium = 80deg, large  = 81\n    Notes: Sets the gradient rotation per breakpoint\n  - Prop: stops\n    Type: array\n    Default:\n    Notes: [Starting gradient color, Ending gradient color]\n  - Prop: backgroundImage\n    Type: string\n    Default:\n    Notes: Uses an image as background instead of a gradient.\n  - Prop: backgroundImageProps\n    Type: string\n    Default:\n    Notes: Props to be passed to ImageBackground component.\n  - Prop: withOverlay\n    Type: boolean\n    Notes: Applies a dark gradient to header\n  - Prop: withUnderlay\n    Type: boolean\n    Notes: Applies an underlaid gradient to header\n  - Prop: withOverlayShadow\n    Type: boolean\n    Notes: Applies a shadowy overlaid gradient to header\n  - Prop: withSpotLight\n    type: boolean\n    Notes: Applies a "spotlight" gradient to header\n```\n\n### Heading Props\n\n```table\nspan: 6\nrows:\n  - Prop: level\n    Type: number\n    Default: 2\n    Notes: Renders the appropriate h tag at level in number\n```\n\n```react\nresponsive: true\n---\n<Header\n  withSpotLight\n>\n    <Heading level={1}>\n        <Heading.Strong>Generic</Heading.Strong>\n        {" "}\n        <Heading.Span>Header</Heading.Span>\n    </Heading>\n</Header>\n```\n\n### Image Header\n\n```react\nresponsive: true\n---\n<ThemeProvider theme={{ themeName: "tm"}}>\n  <React.Fragment>\n  <HeaderWithImage\n    withSpotLight\n  >\n    <Column medium={7} large={8}>\n      <Row>\n        <Breadcrumb>\n          <Breadcrumb.Item position="1" href="/home">Home</Breadcrumb.Item>\n          <Breadcrumb.Item position="2" href="/concerts">Concert Tickets</Breadcrumb.Item>\n          <Breadcrumb.Item position="3">Rock</Breadcrumb.Item>\n        </Breadcrumb>\n        <RatingBadge variant="transparent" ratingValue="4.8" bestRating="5" ratingCount="20" style={ratingBadgeStyles}>\n            4.8\n        </RatingBadge>\n      </Row>\n      <Heading level={1}>\n          <Heading.Strong>Generic</Heading.Strong>\n          {" "}\n          <Heading.Span>Header</Heading.Span>\n      </Heading>\n    </Column>\n    <Column medium={5} large={4}>\n      <HeaderWithImage.ImageWrapper>\n        <ImageCard src="https://placekitten.com/g/400/242" />\n      </HeaderWithImage.ImageWrapper>\n    </Column>\n  </HeaderWithImage>\n  <div>Some other content</div>\n  </React.Fragment>\n</ThemeProvider>\n```\n\n### Image Header with Image Background\n\n```react\nresponsive: true\n---\n<ThemeProvider theme={{ themeName: "tm"}}>\n<React.Fragment>\n  <HeaderWithImage\n    withOverlay\n    backgroundImage="https://www.ticketmaster.com/new/compressedimages/dam/a/03e/154a8956-41a7-4508-a320-95f43764a03e_690051_TABLET_LANDSCAPE_16_9.jpg?width=2&height=1&fit=crop"\n  >\n    <Column medium={7} large={8}>\n      <Row>\n        <Breadcrumb>\n          <Breadcrumb.Item position="1" href="/home">Home</Breadcrumb.Item>\n          <Breadcrumb.Item position="2" href="/concerts">Concert Tickets</Breadcrumb.Item>\n          <Breadcrumb.Item position="3">Rock</Breadcrumb.Item>\n        </Breadcrumb>\n        <RatingBadge variant="transparent" ratingValue="4.8" bestRating="5" ratingCount="20" style={ratingBadgeStyles}>\n            4.8\n        </RatingBadge>\n      </Row>\n      <Heading level={1}>\n          <Heading.Strong>Generic</Heading.Strong>\n          {" "}\n          <Heading.Span>Header</Heading.Span>\n      </Heading>\n    </Column>\n    <Column medium={5} large={4}>\n      <HeaderWithImage.ImageWrapper>\n        <ImageCard\n          src="https://www.ticketmaster.com/new/compressedimages/dam/a/03e/154a8956-41a7-4508-a320-95f43764a03e_690051_TABLET_LANDSCAPE_16_9.jpg?width=448&height=252&fit=crop"\n          withOverlay={false}\n        />\n      </HeaderWithImage.ImageWrapper>\n    </Column>\n  </HeaderWithImage>\n  <div>Some other content</div>\n  </React.Fragment>\n</ThemeProvider>\n```\n\n### Image Header with Overlaid Shadow Image Background\n\n```react\nresponsive: true\n---\n<ThemeProvider theme={{ themeName: "tm"}}>\n<React.Fragment>\n  <HeaderWithImage\n    withOverlay={false}\n    withOverlayShadow={true}\n    backgroundImage="https://s1.ticketm.net/tm/en-us/img/static/usopentennis/bg_header.jpg"\n    backgroundImageProps={{ deg: OVERLAY_SHADOW_DEG, stops: OVERLAY_SHADOW_STOPS, style: { backgroundPosition: "center" }}}\n  >\n    <Column medium={7} large={8}>\n      <Row>\n        <Breadcrumb>\n          <Breadcrumb.Item position="1" href="/home">Home</Breadcrumb.Item>\n          <Breadcrumb.Item position="2" href="/concerts">Concert Tickets</Breadcrumb.Item>\n          <Breadcrumb.Item position="3">Rock</Breadcrumb.Item>\n        </Breadcrumb>\n        <RatingBadge variant="transparent" ratingValue="4.8" bestRating="5" ratingCount="20" style={ratingBadgeStyles}>\n            4.8\n        </RatingBadge>\n      </Row>\n      <Heading level={1}>\n          <Heading.Strong>Generic</Heading.Strong>\n          {" "}\n          <Heading.Span>Header</Heading.Span>\n      </Heading>\n    </Column>\n  </HeaderWithImage>\n  <div>Some other content</div>\n  </React.Fragment>\n</ThemeProvider>\n```\n\n### Lazy Image Header with Underlaid Image Background\n\n```react\nresponsive: true\n---\n<React.Fragment>\n  <LazyHeaderWithImageExample\n    withUnderlay={true}\n    backgroundImage="https://beta.tmol.co/s3images/City/losangeles_889.jpg"\n    backgroundImageProps={{ deg: { small: "40deg", medium: "39deg", large: "25deg" }, stops: [themes.tm.primary.base, themes.tm.accent01.base ], style: { backgroundPosition: "center" } }}\n    height={350}\n    width={650}\n  >\n    <Column medium={7} large={8}>\n      <Heading level={1}>\n          <Heading.Strong>City</Heading.Strong>\n          {" "}\n          <Heading.Span>Header</Heading.Span>\n      </Heading>\n    </Column>\n  </LazyHeaderWithImageExample>\n</React.Fragment>\n```\n\n### Image Header with Underlaid Image Background and Spotlight\n\n```react\nresponsive: true\n---\n<React.Fragment>\n  <HeaderWithImage\n    withUnderlay={true}\n    withSpotLight={true}\n    backgroundImage="https://beta.tmol.co/s3images/City/losangeles_889.jpg"\n  >\n    <Column medium={7} large={8}>\n      <Heading level={1}>\n          <Heading.Strong>City</Heading.Strong>\n          {" "}\n          <Heading.Span>Header</Heading.Span>\n      </Heading>\n    </Column>\n  </HeaderWithImage>\n  <div>Some other content</div>\n</React.Fragment>\n```\n'}});
//# sourceMappingURL=14.c6eba9fd.chunk.js.map