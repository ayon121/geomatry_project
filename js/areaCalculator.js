function AddTextElementValue(id , value){
    const element = document.getElementById(id);
    element.innerText = value;
}

function GetInputElementVAlue(id){
    const element = document.getElementById(id);
    const elementvalueText = element.value;
    const elementValue = parseFloat(elementvalueText);
    return elementValue
    
}
function CalculateTriangleArea(){
    // console.log('done')
    // collecting base
    const baseinputfield = document.getElementById('Trianglebase')
    const basevalueText = baseinputfield.value ; 
    const basevalue = parseFloat(basevalueText) ;
    
    // collecting hieght
    const hieghtinputfield = document.getElementById('TriagleHieght')
    const hieghtvalueText = hieghtinputfield.value ;
    const hieghtvalue = parseFloat(hieghtvalueText);
    

    const area = 0.5 * basevalue * hieghtvalue

    AddTextElementValue('triangleArea' , area)
}
function CalculateRectangleArea(){
    const RectangleWidth = GetInputElementVAlue('RectangleWidth');
    const RectangleLenth = GetInputElementVAlue('RectangleLenth');
    if(isNaN(RectangleLenth) || isNaN(RectangleWidth)){
        alert ('please give me a number')
        return

    }
    const area = RectangleLenth * RectangleWidth;
    AddTextElementValue('RectangleArea' , area);
}

function CalculateParallelogramArea(){
    const Parallelogrambase = GetInputElementVAlue('Parallelogrambase');
    const ParallelogramHieght = GetInputElementVAlue('ParallelogramHieght') ;
    if(isNaN(ParallelogramHieght) || isNaN(Parallelogrambase)){
        alert ('please give me a number')
        return

    }
    const area = ParallelogramHieght * Parallelogrambase ;
    AddTextElementValue('ParallelogramArea' , area);

}

function CalculateEllipseArea(){
    const EllipseA = GetInputElementVAlue('EllipseA');
    const EllipseB = GetInputElementVAlue('EllipseB')
    const area = 3.1416 * EllipseA * EllipseB
    if(isNaN(EllipseA) || isNaN(EllipseB)){
        alert ('please give me a number')
        return

    }
    const areatoFix = area.toFixed(2);
    AddTextElementValue('EllipseArea' , areatoFix)
}