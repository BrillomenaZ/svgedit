export default {
  select_lib: 'Select an image library',
  show_list: 'Show library list',
  import_single: 'Import single',
  import_multi: 'Import multiple',
  open: 'Open as new document',
  buttons: [
    {
      title: 'Image library'
    }
  ],
  imgLibs: [
    {
      name: 'Demo library (local)',
      url: '{path}imagelib/index{modularVersion}.html',
      description: 'Demonstration library for SVG-edit on this server'
    },
    {
      name: 'IAN Symbol Libraries',
      url: 'https://ian.umces.edu/symbols/catalog/svgedit/album_chooser.php?svgedit=3',
      description: 'Free library of illustrations'
    }
    /* ,
    // Disabling until X-Frame-Options may be removed again (or allow cross-origin):
    // Getting messages like this in console:
    // Refused to display 'https://openclipart.org/detail/307176/sign-bike' in a frame
    // because it set 'X-Frame-Options' to 'sameorigin'.
    {
      name: 'Openclipart',
      url: 'https://openclipart.org/svgedit',
      description: 'Share and Use Images. Over 50,000 Public Domain SVG Images and Growing.'
    } */
  ]
};
