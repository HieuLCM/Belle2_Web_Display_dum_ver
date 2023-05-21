import { convertGeometry } from './phoenixExport';

export class DetectorLoader {
  private fileData: any;
  private fileURL: any;

  private subparts: any = {
    // LV
    LV: [['LVCryo'], 0.5],

    // ShieldLayer
    'Shield_Layer > FWD': [['logiFWD_ShieldLayer'], 0.5],
    'Shield_Layer > BWD': [['logiBWD_ShieldLayer'], 0.5],

    // Pole Piece
    Pole_Piece: [['logiPolePiece'], 0.5],

    // VXD
    VXD: [['VXD.DockBoxes'], 0.7],

    // CDC
    CDC: [['logicalCDC'], 0.3],

    // IR Shield
    'IR_Shield > FWD': [['Forward IR Shield'], true],
    'IR_Shield > BWD': [['Backward IR Shield'], true],

    // Flange
    'Flange > FWD': [['logi_CuFlangeFwd'], true],
    'Flange > BWD': [['logi_CuFlangeBwd'], true],

    // TA
    TA: [['logi_Lv1Ta'], true],

    //SVD
    SVD: [['SVD.Envelope'], 0.7],

    // PXD
    PXD: [['PXD.Envelope'], 0.7],

    // SUS
    SUS: [['logi_Lv1SUS'], true],

    // Service Material
    // "Service_Material > FWD": [["ServiceMaterial.GAPFor_1"], 0.6],
    // "Service_Material > BWD": [["ServiceMaterial.GAPBack_1"], 0.6],
    // "Service_Material > TOP_BWD": [["ServiceMaterial.GAPTopBack_1"], 0.6],
    // "Service_Material > Barrel": [["ServiceMaterial.GAPEclCoilBarrel_1"], 0.6],

    // ARICH
    // "ARICH > Shield": [['ARICH.supportWedge'], true],
    // "ARICH > Plate": [['ARICH.mirrorPlate'], true],
    // "ARICH > Cover > Inner": [['ARICH.InnerCylinder'], true],
    // "ARICH > Cover > Outer": [['ARICH.OutterCover'], true],
    // "ARICH > Cover > BWD": [['ARICH.BackwardCoverageWall'], true],

    // "ARICH > Aaerogel > Plane": [['ARICH.aerogel', 'ARICH.supportWall'], true],
    // "ARICH > Aaerogel > Support": [['ARICH.AerogelSupportRing'], true],
    // "ARICH > Plane": [['ARICH.HAPD'], true],
    // "ARICH > Support": [['backTube', 'backWall', 'feb_alcooling', 'ARICH.FWDShield'], true],

    // "ARICH > Envelope > Merger": [['ARICH.singleMergerEnvelope'], true],
    // "ARICH > Envelope > Cables": [['ARICH.cablesEnvelope'], true],

    // TOP_Envelope
    // "TOP_Envelope": [["TOPEnvelopeModule"], 0.7]

    // Section
    // "Section > FWD": [["Section_1_1"], 0.3],
    // "Section > BWD": [["Section_2_2"], 0.3],

    // BKLM
    // "BKLM > FWD": [["BKLM.ForwardSector"], 0.2],
    // "BKLM > BWD": [["BKLM.BackwardSector"], 0.2],
  };

  private hide_childern: any = [];

  constructor(fileURL: any) {
    this.fileURL = fileURL;
  }

  public async getData(objName: string) {
    await convertGeometry(
      this.fileURL,
      'Belle2Geo.gltf',
      6,
      this.subparts,
      this.hide_childern,
      objName
    );
    return this.fileData;
  }
}
