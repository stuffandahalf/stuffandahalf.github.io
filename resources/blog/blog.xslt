<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <title>Blog Preview</title>
      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
    </head>
    <body>
      <h1>Blog Preview</h1>
      <xsl:for-each select="blog/article">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"><xsl:value-of select="title" /></h5>
            <h6 class="card-subtitle"><xsl:value-of select="date" /></h6>
            <p class="card-text"><xsl:value-of select="abstract" /></p>
          </div>
        </div>
        <hr />
      </xsl:for-each>
    </body>
  </html>
</xsl:template>

</xsl:stylesheet>
