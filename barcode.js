<svg id="barcode"></svg>
<script>
var barcode = '{rand(100000000, 999999999)}';
JsBarcode("#barcode", barcode, { format: "ean13", displayValue: false });
</script>

