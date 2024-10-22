    let partCode1 = "xyz:1234-L"

function parsePartCode(partCode){
    let space = partCode.split(":")
    
     let hyphen = space[1].split("-")
      let sizeHyphen = partCode.split("-")
    let part1 = {
        supplierCode: space[0],
        productNumber: hyphen[0],
        size: sizeHyphen[1]
    }
    console.log("Supplier: " + part1.supplierCode + ", Product number: " + part1.productNumber + " Size: " + part1.size)
}

parsePartCode(partCode1)

