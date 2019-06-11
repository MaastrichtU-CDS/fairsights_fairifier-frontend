import { MappingFormat } from './format';

export const MAPPINGFORMATS: MappingFormat[] = [
    { fullName: 'No Format Selected', shortName: 'No Format', extension: ''},
    { fullName: 'BinaryRDF', shortName: 'BINARY', extension: '.brf'},
    { fullName: 'JSON-LD', shortName: 'JSONLD', extension: '.jsonld'},
    { fullName: 'N3', shortName: 'N3', extension: '.n3'},
    { fullName: 'N-Quads', shortName: 'NQUADS', extension: '.nq'},
    { fullName: 'N-Triples', shortName: 'NTRIPLES', extension: '.nt'},
    { fullName: 'RDFa', shortName: 'RDFA', extension: '.rdfa'},
    { fullName: 'RDF/JSON', shortName: 'RDFJSON', extension: '.rj'},
    { fullName: 'RDF/XML', shortName: 'RDFXML', extension: '.rdf'},
    { fullName: 'TriG', shortName: 'TRIG', extension: '.trig'},
    { fullName: 'TriX', shortName: 'TRIX', extension: '.xml'},
    { fullName: 'Turtle', shortName: 'TURTLE', extension: '.ttl'}
];

export const pickedMappingFormatDownload: MappingFormat[] = [
    { fullName: 'No Format Selected', shortName: 'No Format', extension: '' }
];

export const pickedMappingFormatUpload: MappingFormat[] = [
    { fullName: 'No Format Selected', shortName: 'No Format', extension: '' }
];
