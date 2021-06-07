<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <xsl:for-each select="blog/article">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><xsl:value-of select="title" /></h5>
        <h6 class="card-subtitle"><xsl:value-of select="date" /></h6>
        <p class="card-text"><xsl:value-of select="abstract" /></p>
      </div>
    </div>
  </xsl:for-each>
</xsl:template>

</xsl:stylesheet>
